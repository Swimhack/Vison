const https = require('https');

exports.handler = async (event, context) => {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    // Handle OPTIONS request for CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        console.log('Function called with method:', event.httpMethod);
        console.log('Event body:', event.body);
        
        if (!event.body) {
            console.log('No body provided');
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'No request body provided' })
            };
        }

        const { message, apiKey } = JSON.parse(event.body);

        if (!message || !apiKey) {
            console.log('Missing message or API key');
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Message and API key are required' })
            };
        }

        console.log('Making request to Anthropic API...');

        // Use a more compatible approach for the API call
        const postData = JSON.stringify({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 1024,
            messages: [
                {
                    role: 'user',
                    content: message
                }
            ]
        });

        const options = {
            hostname: 'api.anthropic.com',
            port: 443,
            path: '/v1/messages',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const response = await new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let data = '';
                
                res.on('data', (chunk) => {
                    data += chunk;
                });
                
                res.on('end', () => {
                    console.log('API Response status:', res.statusCode);
                    console.log('API Response data:', data);
                    
                    if (res.statusCode !== 200) {
                        reject(new Error(`API request failed: ${res.statusCode} - ${data}`));
                        return;
                    }
                    
                    try {
                        const jsonData = JSON.parse(data);
                        resolve(jsonData);
                    } catch (parseError) {
                        console.error('JSON parse error:', parseError);
                        reject(new Error('Failed to parse API response'));
                    }
                });
            });

            req.on('error', (error) => {
                console.error('Request error:', error);
                reject(error);
            });

            req.write(postData);
            req.end();
        });

        console.log('Successful API response received');
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ response: response.content[0].text })
        };

    } catch (error) {
        console.error('Function Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Internal server error',
                details: error.message 
            })
        };
    }
};