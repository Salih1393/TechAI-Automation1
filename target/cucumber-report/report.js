$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Log in page test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Log In to application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.step({
  "name": "User logs in the account",
  "keyword": "Given "
});
formatter.match({
  "location": "_1_login.user_logs_in_the_account()"
});
formatter.result({
  "status": "passed"
});
});