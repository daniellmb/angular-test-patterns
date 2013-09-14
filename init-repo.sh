#!/usr/bin/env bash
#
# Script to initialize angular unit test patterns
# - install required node packages
# - install bower and components
# - install git hooks

node=`which node 2>&1`
if [ $? -ne 0 ]; then
  echo "Please install NodeJS."
  echo "http://nodejs.org/"
  exit 1
fi

npm=`which npm 2>&1`
if [ $? -ne 0 ]; then
  echo "Please install NPM."
fi

bower=`which bower 2>&1`
if [ $? -ne 0 ]; then
  echo "Installing Bower..."
  npm install -g bower
fi

echo "Installing required npm packages..."
npm install --loglevel warn

# Don't need git hooks in travis-ci
if [ -z "${TRAVIS}" ]; then
  echo "Installing git hooks..."
  mkdir -p .git/hooks
  ln -s ../../hooks/commit-msg.sh .git/hooks/commit-msg
  chmod +x .git/hooks/commit-msg
  ln -s ../../hooks/pre-commit.sh .git/hooks/pre-commit
  chmod +x .git/hooks/pre-commit
fi

cd example
echo "Installing example required npm packages..."
npm install --loglevel warn
echo "Installing example required bower packages..."
bower install --quiet