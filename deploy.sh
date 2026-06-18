#!/bin/bash
echo "Building..."
ng build --base-href="/portfolio_/"

echo "Copying files..."
cp -r dist/Portfolio/browser/* .
cp dist/Portfolio/browser/index.html 404.html

echo "Pushing to GitHub..."
git add .
git commit -m "Deploy: fix base href"
git push origin main

echo "Done!"