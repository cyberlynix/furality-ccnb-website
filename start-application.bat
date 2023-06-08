@echo off
echo Checking Node.js version...

node --version | findstr /C:"v18." > nul

if errorlevel 1 (
  echo Node.js 18 must be installed to continue.
  echo Please install Node.js 18 and try again.
  pause
  exit /b
) else (
  echo Installing dependencies...
  npm install

  echo Building the application...
  npm run build

  echo Starting the application...
  npm run start
)