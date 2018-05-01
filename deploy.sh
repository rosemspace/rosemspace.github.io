#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git config user.name "Roman Shevchenko"
git config user.email "iroman.via@gmail.com"
git add -A
git commit -m 'deploy'

# deploying to https://rosemlab.github.io
git push -f git@github.com:rosemlab/rosemlab.github.io.git master

# remove git folder
rm -rf .git

cd -
