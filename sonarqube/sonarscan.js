const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "e838dd064de0e78c5c39bcbb23aeb758353944ca",
    options: {
      "sonar.projectName": "react-grid-layout",
      "sonar.projectDescription": "Here I can add a description of my project",
      "sonar.projectKey": "7abd899dee8cc7a55aeac420a38f9e431e0b2aa0",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.login": 'admin',
      "sonar.password": 'akshar07'
    },
  },
  () => process.exit()
);
