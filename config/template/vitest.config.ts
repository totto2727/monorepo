import { defineConfig } from "vitest/config";

export default defineConfig(() => {
  return {
    test: {
      cache: {
        dir: "node_modules/.cache/vitest",
      },
    },
  };
});
