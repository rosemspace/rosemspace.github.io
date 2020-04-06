#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# create a build output directory if it doesn't exist for some reasons
mkdir -p dist

# navigate into the build output directory
cd dist

# remove the previous git folder if it still exists for some reasons
rm -rf .git

# initialize git
git init

# set proper user data
git config user.name "Roman Shevchenko"
git config user.email "iroman.via@gmail.com"

# add and commit all build files
git add -A
git commit -m 'deploy'

# deploy to https://rosemspace.github.io
git push -f https://github.com/rosemspace/rosemspace.github.io.git master

# remove git folder
rm -rf .git

# go back
cd -

# uncomment this line and comment `set -e` if you want to see the errors (useful on Windows)
#read -p "Press [Enter] key to exit..."
