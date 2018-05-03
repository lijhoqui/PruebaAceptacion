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

    CucumberEnvironment environment = new CucumberEnvironment();
    DefinicionSteps definicionSteps = new DefinicionSteps(environment);


    public ExampleTest() {}


    @Given("^Cargo la pagina de Google$")
    public void cargo_la_pagina_de_Google() {
        String googlePath = "http://www.google.com";
        definicionSteps.voyALaUrl(googlePath);
    }

    @When("^Busco la palabra Ceiba$")
    public void busco_la_palabra_Ceiba() throws IOException {

    }

    @Then("^Aparece la pagina web de Ceiba$")
    public void aparece_la_pagina_web_de_Ceiba() throws IOException {



    }
}
