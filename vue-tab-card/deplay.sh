#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deplay'

git push -f git@github.com:yskf0327/js-tab-card.git master:gh-pages

cd -