#!/bin/bash

# Professional Enhanced Salla Theme Installation Script
# Author: A-jAljanabi
# Email: Alijamal532@gmail.com

echo "🚀 Professional Enhanced Salla Theme Installation"
echo "=================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

# Check if Salla CLI is installed
if ! command -v salla &> /dev/null; then
    echo "📦 Installing Salla CLI..."
    npm install -g @salla.sa/cli
fi

echo "✅ Prerequisites check completed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the theme
echo "🔨 Building the theme..."
pnpm run production

if [ $? -eq 0 ]; then
    echo "✅ Theme built successfully"
else
    echo "❌ Failed to build theme"
    exit 1
fi

echo ""
echo "🎉 Installation completed successfully!"
echo ""
echo "📋 Next steps:"
echo "   1. Run 'salla theme preview' to preview the theme"
echo "   2. Run 'salla theme push' to deploy to your store"
echo "   3. Configure theme settings in your Salla admin panel"
echo ""
echo "📚 For more information, visit:"
echo "   GitHub: https://github.com/A-jAljanabi/profisional-enhanced"
echo "   Documentation: https://docs.salla.dev/"
echo ""
echo "💬 Need help? Contact: Alijamal532@gmail.com" 