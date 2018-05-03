package co.com.prueba.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"src/test//resource/features"},
        plugin = {"pretty:build/reports/tests/prueba/pretty",
                  "html:build/reports/tests/prueba/html",
                  "json:build/reports/tests/prueba/json/cucumber.json"},
        tags = {"not @Ignore"},
        glue = {"co.com.prueba.steps"})
public class CucumberRunner {


}
