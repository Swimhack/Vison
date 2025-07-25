# Claude Web Chat 💬

A beautiful, modern web interface for chatting with Claude AI. Deploy anywhere and share with friends!

![Claude Chat Interface](https://img.shields.io/badge/Claude-3.5%20Sonnet-blue) ![Deploy Status](https://img.shields.io/badge/Deploy-Ready-green) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🎨 **Beautiful UI** - Modern, responsive design that works on all devices
- 🔒 **Secure** - API keys stored locally in browser only
- ⚡ **Fast** - Real-time chat with typing indicators
- 🌐 **Deploy Anywhere** - Vercel, Netlify, Heroku, or any hosting platform
- 📱 **Mobile Friendly** - Great experience on phones and tablets
- ⚙️ **Easy Setup** - One-click deployment ready

## 🚀 Quick Deploy

### Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/claude-web-chat)

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/claude-web-chat)

### Manual Deploy

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/claude-web-chat.git
cd claude-web-chat
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start locally:**
```bash
npm start
```

4. **Deploy to your platform of choice!**

## 📋 What You'll Need

- **Anthropic API Key** - Get yours free at [console.anthropic.com](https://console.anthropic.com)
- **Web Browser** - Any modern browser works
- **Internet Connection** - For API calls to Claude

## 🎯 How It Works

1. **Deploy** this repository to your preferred platform
2. **Share the URL** with your friend
3. **They enter their API key** (stored securely in their browser)
4. **Start chatting** with Claude immediately!

## 🔧 Local Development

```bash
# Clone the repo
git clone https://github.com/yourusername/claude-web-chat.git
cd claude-web-chat

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
claude-web-chat/
├── public/
│   └── index.html              # Main chat interface
├── netlify/functions/
│   └── chat.js                 # Serverless function for Netlify
├── claude-chat-server.js       # Node.js server
├── claude-web-chat.html        # Standalone version
├── package.json                # Dependencies
├── vercel.json                 # Vercel configuration
├── netlify.toml               # Netlify configuration
└── README.md                  # This file
```

## 🎨 Customization

### Change Claude Model
Edit the model in the API calls:
```javascript
model: 'claude-3-5-sonnet-20241022'  // Change to any available model
```

### Modify Styling
All CSS is in the HTML files. Key classes:
- `.chat-container` - Main chat area
- `.message.user` - User messages
- `.message.assistant` - Claude responses
- `.chat-header` - Top header

## 🔒 Security

- **API keys never leave the user's browser**
- **No server-side storage** of sensitive data
- **HTTPS enforced** on all deployments
- **CORS properly configured**

## 🌍 Deployment Platforms

### Vercel
- Copy `vercel.json` configuration
- Push to GitHub and connect
- Auto-deploys on every commit

### Netlify
- Copy `netlify.toml` configuration
- Supports serverless functions
- Great for static hosting

### Railway
- Simple `railway up` deployment
- Built-in HTTPS and domains

### Heroku
- Standard Node.js deployment
- Add `web: node claude-chat-server.js` to Procfile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this for any purpose!

## 🆘 Support

Having issues? Check out:

1. **Browser Console** - Look for error messages
2. **API Key** - Verify it's correct at console.anthropic.com
3. **Network** - Ensure you can reach api.anthropic.com
4. **Credits** - Check you have API credits remaining

## 🎉 What's Next?

- [ ] Add conversation history persistence
- [ ] Support for file uploads
- [ ] Multiple conversation threads
- [ ] Custom system prompts
- [ ] Theme customization

---

**Made with ❤️ for easy Claude AI access**

Share this with anyone who wants their own Claude chat interface!