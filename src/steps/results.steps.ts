import { Then } from "@cucumber/cucumber";
import ResultsPage from "pages/results.page";

Then(/^I should see the next page$/,
    async (): Promise<void> => {
        await ResultsPage.element.waitForExist();
    });
