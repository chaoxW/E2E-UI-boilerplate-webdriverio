import { variables } from "./../../wdio.variables";
import { removeSync } from "fs-extra";
const { generate } = require("multiple-cucumber-html-reporter");
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;

export const hooks = {
    onPrepare: function () {
        // Clean the folder that holds the report files
        removeSync(variables.reportFolder);
    },
    afterStep: async function (step: any, scenario: any, result: any) {
        if (!result.passed) {
            cucumberJson.attach(await browser.takeScreenshot(), "image/png");
        }
    },
    onComplete: function () {
        // Generate the report when it all tests are done
        generate({
            jsonDir: variables.jsonReportFolder,
            reportPath: variables.htmlReportFolder,
            displayDuration: true,
            pageTitle: "Report",
            reportName: "Tests Report",
            // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
        });
    },
};
