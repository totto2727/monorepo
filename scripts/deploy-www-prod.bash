#!/bin/bash

target="www-prod"

if [ "$CF_PAGES_BRANCH" == "main" ]; then
  pnpm -w static-analysis --filter ${target}
fi

  pnpm -w build --filter ${target}
