import { test, expect, devices } from "@playwright/test";

test.use({
  ...devices["iPhone 6"],
});

test("モバイルメニューは正しく機能しているか", async ({ page }) => {
  await page.goto("http://localhost:4173");
  await expect(
    page.getByRole("button", { name: "検索メニュー" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "検索メニュー" }).click();
  await expect(page.locator("h2")).toContainText("検索条件");
  await expect(page.getByLabel("都道府県")).toBeVisible();
  await expect(page.getByLabel("表示内容")).toBeVisible();
  await expect(page.getByLabel("年度")).toBeVisible();
  await expect(
    page.getByText("職業大分類で見る職業中分類で見る"),
  ).toBeVisible();
  await page.getByRole("button", { name: "閉じる" }).click();
});
