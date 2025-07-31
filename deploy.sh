#!/bin/bash

# Laravel Forge Deployment Script for Next.js App
# Place this in your Laravel Forge deployment script

set -e

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /home/forge/your-domain.com

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Create logs directory if it doesn't exist
mkdir -p logs

# Restart or start the application with PM2
echo "🔄 Restarting application..."
if pm2 describe servers-room-1 > /dev/null 2>&1; then
    echo "Application exists, restarting..."
    pm2 restart servers-room-1
else
    echo "Starting new application..."
    pm2 start ecosystem.config.js --env production
fi

# Save PM2 configuration
pm2 save

echo "✅ Deployment completed successfully!"
echo "📊 Application status:"
pm2 status servers-room-1

echo "📝 Recent logs:"
pm2 logs servers-room-1 --lines 10
