#!/usr/bin/env bash

echo "create specs to run"
node spec/example.tester.js
cd ./example
echo "test example applications"
grunt