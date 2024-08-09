import { defineConfig, type PlaywrightTestConfig } from "@playwright/test";

import commonConfig from "./playwright.common.config";

const config: PlaywrightTestConfig = defineConfig({
  ...commonConfig,
  testDir: "./e2e-tests/dom-to-db-tests",
  outputDir: "./test-results/dom-to-db",
  testMatch: /\.e2e\.ts/,
  use: {
    ...commonConfig.use,
    baseURL: "http://localhost:8081",
  },
  webServer: [
    {
      // TODO: change as part of #218 (run in pipeline) after #154 (simpler loading of fixtures)

      // local:
      // goal: run tests and run app against same db but on different port
      // requires: npm run build and cargo build and ../backend/target/debug/api --reset-database --seed-data

      // so no reset db and seed data
      // no npm run build because takes too long
      // so cargo run or running from target/debug/api
      // ../backend/target/debug/api --frontend-dist ./dist

      // pipeline: build frontend, build backend, run frontend
      // goal: reliable state to run tests against

      // this puts the db.sqlite in frontend, so nope
      command:
        // workflow paths
        // ../builds/backend/api
        // ../builds/frontend

        process.env.CI
          ? "cd ../builds/backend && ./api --frontend-dist ../frontend --port 8081"
          : "cd ../backend/target/debug && ./api --frontend-dist ../../../frontend/dist --port 8081",
      port: 8081,
    },
  ],
});

export default config;
