#!/bin/bash

target=public-site

filter='--filter ${target}'
if [ "$CF_PAGES_BRANCH" == "main" ]; then
  pnpm -w static-analysis ${filter}
  pnpm -w build ${filter}
else
  pnpm -w build ${filter}
fi

