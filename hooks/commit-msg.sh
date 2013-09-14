#!/usr/bin/env sh

# commit-msg.sh
#.git/hooks/commit-msg

# Installation:
# >> cd <repo>
# >> ln -s ../../hooks/commit-msg.sh .git/hooks/commit-msg
# Note: you may need to run the following command to add execute permissions.
# >> chmod +x .git/hooks/commit-msg

PATH=$PATH:/usr/local/bin:/usr/local/sbin

node hooks/validate-commit-msg.js $1
RESULT=$?

if [ $RESULT -ne 0 ]; then
  echo "Commit message is invalid, commit rejected."
  exit 1
fi

echo "Tests checkout, hi5!"
exit 0