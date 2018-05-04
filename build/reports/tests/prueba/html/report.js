$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/features/ExampleTest.feature");
formatter.feature({
  "name": "Tests de Ejemplo",
  "description": "    Como un Usuario\n    Quiero\n    Para",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Hacer una busqueda en Google",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Voy a la pagina \"http://www.google.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DefinicionSteps.voyALaUrl(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tomo un screenshot",
  "keyword": "And "
});
formatter.embedding("image/png", "embedded0.png");
formatter.match({
  "location": "DefinicionSteps.tomoUnScreenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Busco la palabra Ceiba",
  "keyword": "When "
});
formatter.match({
  "location": "ExampleTest.busco_la_palabra_Ceiba()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tomo un screenshot",
  "keyword": "And "
});
formatter.embedding("image/png", "embedded1.png");
formatter.match({
  "location": "DefinicionSteps.tomoUnScreenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Aparece la pagina web de Ceiba",
  "keyword": "Then "
});
formatter.match({
  "location": "ExampleTest.aparece_la_pagina_web_de_Ceiba()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});