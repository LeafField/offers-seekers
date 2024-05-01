import { test, expect } from "@playwright/test";

test("メニューの指定がテーブルに正しく反映されるかどうか", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("cell", { name: "事務的職業" })).toBeVisible();
  await expect(page.getByRole("cell", { name: "352130人" })).toBeVisible();
  await page.getByLabel("都道府県").selectOption("13");
  await page.getByLabel("表示内容").selectOption("5");
  await page.getByLabel("年度").selectOption("2020");
  await page.getByText("職業中分類で見る").click();
  await expect(page.getByRole("cell", { name: "一般事務員" })).toBeVisible();
  await expect(page.getByRole("cell", { name: "13791人" })).toBeVisible();
});
