#!/bin/bash

cp -r ./src ./dist/esm
find dist/esm -type f -name "*.js" -print0 | xargs -0 sed -i -r "s/([ie][mx]port [^']+?)'(\\.[^']+)'/\\1'\\2.mjs'/g"
find dist/esm -type f -name "*.js" -print0 | xargs -0 sed -i -r "s/(} from )'(\\.[^']+)'/\\1'\\2.mjs'/g"
find dist/esm -type f -name "*.js" -print0 | xargs -0 sed -i -r "s/.([cm])js.mjs/.\\1js/g"
for file in ./dist/esm/*.js; do
  mv -- "$file" "${file%.js}.mjs"
done
for file in ./dist/esm/**/*.js; do
  mv -- "$file" "${file%.js}.mjs"
done
