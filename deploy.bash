#!/bin/bash

if [ "$CF_PAGES_BRANCH" == "main" ]; then
  pnpm check:type
  pnpm build
else
  pnpm build
fi

