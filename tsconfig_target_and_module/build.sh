#!/bin/sh

set -e

for target in "es5" "es6" "es2015" "es2016" "es2017" "es2018" "es2019" "es2020" "es2021" "es2022"; do
  for module in "commonjs" "amd" "es2015" "es2020" "es2022" "node16"; do
    echo ${target}.${module}
    npx tsc main.ts --target ${target} --module ${module} --outDir ${target}.${module}
  done
done