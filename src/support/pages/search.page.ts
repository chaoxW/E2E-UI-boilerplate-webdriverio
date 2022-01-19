import { Page } from "@base/page";

const consentAgreeButtonCss = '#L2AGLb';
const consentShowMoreButtonCss = '#KByQx';
const inputCss = 'input[name="q"]';
const searchButtonCss = 'ul[role="listbox"] li div[role="option"] span';

class SearchPage extends Page {
    get consentAgreeButton() {
        return $(consentAgreeButtonCss);
    }

    get consentShowMoreButton() {
        return $(consentShowMoreButtonCss);
    }

    get input() {
        return $(inputCss);
    }

    get searchButton() {
        return $(searchButtonCss);
    }

    constructor() {
        super();
    }

    async acceptCookiesPolicy(): Promise<void> {
        await browser.waitUntil(
            async (): Promise<boolean> => {
                return await this.input.isClickable() || await this.consentAgreeButton.isClickable();
            },
            { timeoutMsg: "Something went wrong loading the page." },
        );
        if (await this.consentAgreeButton.isClickable()) {
            await this.consentAgreeButton.click();
        }
    }
}
export default new SearchPage();
