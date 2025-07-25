# Claude Web Chat - Setup & Deployment Guide

A simple, beautiful web interface for chatting with Claude AI that can be deployed anywhere and accessed via URL.

## 🚀 Quick Start

### Option 1: Static HTML Version (Simplest)
The `claude-web-chat.html` file is a complete, self-contained chat interface that works entirely in the browser.

1. Open `claude-web-chat.html` in any web browser
2. Enter your Anthropic API key when prompted
3. Start chatting with Claude!

### Option 2: Node.js Server Version (Recommended for deployment)
The server version provides better security and functionality.

## 📋 Prerequisites

- Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com))
- Node.js 16+ (for server version)
- Git (for deployment)

## 🛠️ Local Development Setup

1. **Install dependencies:**
```bash
npm install express cors dotenv
```

2. **Start the server:**
```bash
node claude-chat-server.js
```

3. **Open your browser:**
   - Go to `http://localhost:3000`
   - Enter your API key when prompted
   - Start chatting!

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Setup project files:**
```bash
# Copy the package.json
cp claude-chat-package.json package.json

# Copy the vercel config
cp claude-chat-vercel.json vercel.json
```

3. **Deploy:**
```bash
vercel --prod
```

4. **Share the URL with your friend!**

### Deploy to Netlify

1. **Setup project files:**
```bash
# Copy the package.json
cp claude-chat-package.json package.json

# Copy the netlify config
cp claude-chat-netlify.toml netlify.toml
```

2. **Deploy using Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

3. **Or deploy via GitHub:**
   - Push your code to GitHub
   - Connect GitHub repo to Netlify
   - Auto-deploys on every push!

### Deploy to Railway

1. **Install Railway CLI:**
```bash
npm install -g @railway/cli
```

2. **Login and deploy:**
```bash
railway login
railway link
railway up
```

### Deploy to Heroku

1. **Create Heroku app:**
```bash
heroku create your-claude-chat-app
```

2. **Setup files:**
```bash
cp claude-chat-package.json package.json
```

3. **Deploy:**
```bash
git add .
git commit -m "Deploy Claude chat app"
git push heroku main
```

## 🔐 Security & API Keys

### For your friend to use the app:

1. **They need their own API key** from [console.anthropic.com](https://console.anthropic.com)
2. **The API key is stored locally** in their browser (never sent to your server)
3. **They enter it once** and it's remembered for future visits

### Security Features:
- API keys are stored in browser localStorage only
- No API keys are logged or stored on the server
- All communication with Claude is direct (your server just proxies the requests)

## 📁 File Structure

```
your-project/
├── claude-web-chat.html          # Standalone version
├── claude-chat-server.js         # Node.js server
├── public/                       # Static files for server
│   └── index.html                # Main chat interface
├── netlify/functions/             # Netlify serverless functions
│   └── chat.js                   # Chat API endpoint
├── package.json                  # Node.js dependencies
├── vercel.json                   # Vercel configuration
└── netlify.toml                  # Netlify configuration
```

## 🎨 Features

- **Beautiful, modern UI** with typing indicators
- **Real-time chat** with Claude 3.5 Sonnet
- **Responsive design** works on mobile and desktop
- **Connection status indicator**
- **Settings panel** for API key management
- **Chat history** persists during session
- **Easy deployment** to multiple platforms

## 🔧 Customization

### Change the Claude Model
Edit the model name in the API calls:
```javascript
model: 'claude-3-5-sonnet-20241022'  // Change this line
```

### Modify the UI
All styling is contained in the `<style>` section. Key classes:
- `.chat-container` - Main chat box
- `.message.user` - User messages
- `.message.assistant` - Claude's messages
- `.chat-header` - Top header bar

### Add Features
The JavaScript class `ClaudeChat` contains all functionality. Easy to extend!

## 🚨 Troubleshooting

### "API request failed" error
- Check your API key is correct
- Ensure you have credits in your Anthropic account
- Try refreshing the page

### Deployment issues
- Make sure all files are copied correctly
- Check that Node.js version is 16+
- Verify environment variables are set

### CORS issues (if hosting yourself)
The server includes CORS headers. If issues persist, check your hosting platform's documentation.

## 💡 Tips for Your Friend

1. **Get an API key** at console.anthropic.com (free tier available)
2. **Bookmark the URL** you send them
3. **API key is private** - never share it
4. **Works on mobile** - great for on-the-go chats
5. **Clear chat** anytime using the settings button

## 📞 Support

If you or your friend need help:
1. Check the browser console for error messages
2. Verify the API key is working at console.anthropic.com
3. Try a different browser or incognito mode
4. Check if the deployment URL is accessible

---

**That's it!** Your friend now has their own personal Claude chat interface at your deployed URL. They just need to get their API key and start chatting!