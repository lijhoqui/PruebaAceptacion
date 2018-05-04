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
  "name": "Cargo la pagina de Google",
  "keyword": "Given "
});
formatter.match({
  "location": "ExampleTest.cargo_la_pagina_de_Google()"
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
formatter.uri("src/test/resource/features/IniciarSesion.feature");
formatter.feature({
  "name": "Tests de Inicio de Sesion",
  "description": "  Como un Usuario\n  Quiero\n  Para",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Hacer un ingreso a la pagina University",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "cargo la pagina University",
  "keyword": "Given "
});
formatter.match({
  "location": "IniciarSesion.cargo_la_pagina_University()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});