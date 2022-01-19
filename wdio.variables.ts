const currentDate = new Date().toLocaleString();

export const variables = {
    baseUrl: process.env.BASE_URL || "https://www.google.com",
    reportFolder: "reports",
    jsonReportFolder: "reports/cucumberjs/",
    htmlReportFolder: "reports/html/",

    local: {
        capabilities: [
            {
                browserName: "chrome",
                'goog:chromeOptions': {
                    args: [
                        '--disable-infobars',
                        '--start-maximized'
                    ]
                },
            },
        ],
    },
};
