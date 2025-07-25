// Import fetch for Node.js environments that don't have it built-in
const fetch = require('node-fetch');

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

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 1024,
                messages: [
                    {
                        role: 'user',
                        content: message
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Anthropic API Error:', response.status, errorData);
            return {
                statusCode: response.status,
                headers,
                body: JSON.stringify({ 
                    error: `API request failed: ${response.status}` 
                })
            };
        }

        const data = await response.json();
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ response: data.content[0].text })
        };

    } catch (error) {
        console.error('Function Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};