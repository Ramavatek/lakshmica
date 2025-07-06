#!/bin/bash

# GitHub Pages Deployment Script for Lakshmica Enterprises

echo "🚀 Starting GitHub Pages deployment setup..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: This is not a git repository. Please run 'git init' first."
    exit 1
fi

# Check if we have a remote origin
if ! git remote get-url origin &> /dev/null; then
    echo "❌ Error: No remote origin found. Please add your GitHub repository as origin:"
    echo "   git remote add origin https://github.com/yourusername/lakshmica.git"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Adding and committing changes..."
    git add .
    git commit -m "Configure GitHub Pages deployment"
fi

# Push to main branch
echo "📤 Pushing to main branch..."
git push origin main

echo "🎉 Deployment setup complete!"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to 'Pages' section"
echo "3. Under 'Source', select 'GitHub Actions'"
echo "4. Your site will be available at: https://yourusername.github.io/lakshmica"
echo ""
echo "The site will automatically rebuild and deploy when you push to main branch."
