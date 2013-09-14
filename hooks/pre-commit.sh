#!/usr/bin/env sh

# pre-commit.sh
#.git/hooks/pre-commit

# Installation:
# >> cd <repo>
# >> ln -s ../../hooks/pre-commit.sh .git/hooks/pre-commit
# Note: you may need to run the following command to add execute permissions.
# >> chmod +x .git/hooks/pre-commit

PATH=$PATH:/usr/local/bin:/usr/local/sbin

if git diff-index --quiet HEAD --; then
    # no changes between index and working copy; just run tests
    npm test
    RESULT=$?
else
    # Test the version that's about to be committed, stashing all unindexed changes
    git stash -q --keep-index
    npm test
    RESULT=$?
    git stash pop -q
fi

if [ $RESULT -ne 0 ]; then
  echo "Pre-commit check failed, commit rejected."
  exit 1
fi

echo "All tests passed, hi5!"
exit 0