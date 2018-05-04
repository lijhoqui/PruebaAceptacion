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

    @When("^Busco la palabra Ceiba$")
    public void busco_la_palabra_Ceiba() throws IOException {
        WebElement campoBusqueda = driver.findElement(By.id("lst-ib"));
        campoBusqueda.clear();
        campoBusqueda.sendKeys("ceiba software");   
        campoBusqueda.sendKeys(Keys.TAB);
    }

    @Then("^Aparece la pagina web de Ceiba$")
    public void aparece_la_pagina_web_de_Ceiba() throws IOException {
        WebElement botonBusqueda = driver.findElement(By.name("btnK"));
        botonBusqueda.click();
    }
}
