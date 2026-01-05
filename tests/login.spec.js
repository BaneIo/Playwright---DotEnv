import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

test("DotEnv test - login", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Log in" }).click();

  await page.locator("#loginusername").type(process.env.USERNAME || "");
  await page.locator("#loginpassword").type(process.env.PASSWORD || "");

  await page.getByRole("button", { name: "Log in" }).click();

  await page.getByRole("link", { name: "PRODUCT STORE" });
});
