import { test as base } from "@playwright/test";
import { HomePage } from "../../pages/clientSite/HomePage";
import { NavPage } from "../../pages/clientSite/NavPage";
import { ArticlePage } from "../../pages/clientSite/ArticlePage";

export type FrameworkFixtures = {
  homePage: HomePage;
  navPage: NavPage;
  articlePage: ArticlePage;
};

export const test = base.extend<FrameworkFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  navPage: async ({ page }, use) => {
    await use(new NavPage(page));
  },
  articlePage: async ({ page }, use) => {
    await use(new ArticlePage(page));
  },
});

export { expect } from "@playwright/test";
