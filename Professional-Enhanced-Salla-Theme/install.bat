@echo off
chcp 65001 >nul
echo 🚀 Professional Enhanced Salla Theme Installation
echo ==================================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if pnpm is installed
pnpm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Installing pnpm...
    npm install -g pnpm
)

REM Check if Salla CLI is installed
salla --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Installing Salla CLI...
    npm install -g @salla.sa/cli
)

echo ✅ Prerequisites check completed
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call pnpm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Build the theme
echo 🔨 Building the theme...
call pnpm run production

if %errorlevel% neq 0 (
    echo ❌ Failed to build theme
    pause
    exit /b 1
)

echo ✅ Theme built successfully
echo.
echo 🎉 Installation completed successfully!
echo.
echo 📋 Next steps:
echo    1. Run 'salla theme preview' to preview the theme
echo    2. Run 'salla theme push' to deploy to your store
echo    3. Configure theme settings in your Salla admin panel
echo.
echo 📚 For more information, visit:
echo    GitHub: https://github.com/A-jAljanabi/profisional-enhanced
echo    Documentation: https://docs.salla.dev/
echo.
echo 💬 Need help? Contact: Alijamal532@gmail.com
pause 