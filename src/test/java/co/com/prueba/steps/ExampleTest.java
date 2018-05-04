package co.com.prueba.steps;

import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.*;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class ExampleTest {

    private WebDriver driver;
    private CucumberEnvironment environment;
    private DefinicionSteps definicionSteps;

    public ExampleTest(CucumberEnvironment environment) {
        this.environment = environment;
        this.driver = environment.getDriver();
        this.definicionSteps = new DefinicionSteps(environment);
    }


    @Given("^Cargo la pagina de Google$")
    public void cargo_la_pagina_de_Google() {
        String googlePath = "http://www.google.com";
        definicionSteps.voyALaUrl(googlePath);
        definicionSteps.tomoUnScreenshot();
    }

    @When("^Busco la palabra Ceiba$")
    public void busco_la_palabra_Ceiba() throws IOException {

    }

    @Then("^Aparece la pagina web de Ceiba$")
    public void aparece_la_pagina_web_de_Ceiba() throws IOException {



    }
}
