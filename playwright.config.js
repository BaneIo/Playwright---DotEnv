require("dotenv").config();
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],

    ["allure-playwright", { outputFolder: "allure-results" }],
  ],
  use: {
    headless: true,
    baseURL: process.env.BASE_URL,
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    //{ name: "firefox", use: { ...devices["Desktop Firefox"] } },
    //{ name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
