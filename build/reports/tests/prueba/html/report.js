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
formatter.embedding("image/png", "embedded0.png");
formatter.match({
  "location": "ExampleTest.busco_la_palabra_Ceiba()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LINA-QUINTERO\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\LINA~1.QUI\\AppData...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.139, webStorageEnabled: true}\nSession ID: bb5f33294aca9ad56f349ff0b9b73039\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat co.com.prueba.steps.ExampleTest.busco_la_palabra_Ceiba(ExampleTest.java:50)\r\n\tat ✽.Busco la palabra Ceiba(src/test/resource/features/ExampleTest.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Aparece la pagina web de Ceiba",
  "keyword": "Then "
});
formatter.match({
  "location": "ExampleTest.aparece_la_pagina_web_de_Ceiba()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});