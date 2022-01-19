import { Given, When } from "@cucumber/cucumber";
import LandingPage from "pages/search.page";

Given(/^The landing page is shown$/,
    async (): Promise<void> => {
        LandingPage.open();
    });

Given(/^I agree with the cookies policy if asked$/,
    async (): Promise<void> => {
        await LandingPage.acceptCookiesPolicy();
    });

When(/^I insert "(.*)" in the input$/,
    async (text: string): Promise<void> => {
        await LandingPage.input.setValue(text);
        await LandingPage.input.click();
    });

When(/^I press the search button$/,
    async (): Promise<void> => {
        await LandingPage.searchButton.waitForExist();
        await LandingPage.searchButton.click();
    });
