#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# initialize git
git init

# set proper user data
git config user.name "Roman Shevchenko"
git config user.email "iroman.via@gmail.com"

# add and commit all build files
git add -A
git commit -m 'deploy'

# deploy to https://rosemlab.github.io
git push -f git@github.com:rosemlab/rosemlab.github.io.git master

# remove git folder
rm -rf .git

# go back
cd -
