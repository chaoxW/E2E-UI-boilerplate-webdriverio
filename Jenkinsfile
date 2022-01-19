node {
    properties([
        buildDiscarder(
            logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')
        )
    ])
    docker.image('circleci/node:16-browsers').inside("-v /etc/passwd:/etc/passwd -e 'HOME=${env.WORKSPACE}'") {
        stage('test: e2e') {
            motork.checkOutFromOrigin('e2e-ui-boilerplate-webdriverio', 'master')

            sh 'npm ci'

            sh 'npm run build'

            try {
                sh 'npm run test'
            } finally {
                String reportDir = 'reports/html/'
                archiveArtifacts artifacts: reportDir
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: false,
                    reportDir: reportDir,
                    reportFiles: 'index.html',
                    reportName: 'HTML E2E Test Report',
                    reportTitles: ''
                ])
            }
        }
    }
}
