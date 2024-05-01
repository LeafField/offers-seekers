import { test, expect } from "@playwright/test";

test("初期表示が正しく為されているか", async ({ page }) => {
  await page.goto("http://localhost:4173/");
  await expect(page.locator("h1")).toContainText("求人・求職者数");
  await expect(page.getByLabel("都道府県")).toContainText(
    "北海道青森県岩手県宮城県秋田県山形県福島県茨城県栃木県群馬県埼玉県千葉県東京都神奈川県新潟県富山県石川県福井県山梨県長野県岐阜県静岡県愛知県三重県滋賀県京都府大阪府兵庫県奈良県和歌山県鳥取県島根県岡山県広島県山口県徳島県香川県愛媛県高知県福岡県佐賀県長崎県熊本県大分県宮崎県鹿児島県沖縄県",
  );
  await expect(page.getByRole("main")).toContainText(
    "職業分類名求人・求職者数事務的職業352130人運搬・清掃等の職業269781人サービスの職業179253人専門的・技術的職業162822人販売の職業156384人生産工程の職業83461人輸送・機械運転の職業51585人分類不能の職業32247人建設・採掘の職業30842人農林漁業の職業10615人保安の職業9794人管理的職業3049人",
  );
});

test("メニュー画面での選択が正しくテーブルに反映されるか", async ({ page }) => {
  await page.goto("http://localhost:4173/");
  await page.getByLabel("都道府県").selectOption("5");
  await page.getByLabel("表示内容").selectOption("3");
  await page.getByLabel("年度").selectOption("2020");
  await page.getByText("職業中分類で見る").click();
  await expect(page.getByRole("main")).toContainText(
    "職業分類名求人・求職者数一般事務員29387人すべての中分類14280人その他の運搬等の職業7830人商品販売の職業6753人介護サービスの職業5302人飲食物調理の職業4958人保健師、助産師等4458人清掃の職業3961人製品製造・加工処理3434人社会福祉の専門的職業3109人接客・給仕の職業2593人機械組立の職業1982人その他のサービス1166人その他の保健医療1106人会計事務員1034人医療技術者831人保健医療サービス781人生活衛生サービス679人その他の専門的職業669人運搬の職業636人",
  );
});
