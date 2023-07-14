#!/bin/bash

target="www-preview"

if [ "$CF_PAGES_BRANCH" == "main" ]; then
  pnpm -w static-analysis --filter ${target}
fi

  pnpm -w build --filter ${target}
