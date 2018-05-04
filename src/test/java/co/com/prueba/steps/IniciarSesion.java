package co.com.prueba.steps;

import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class IniciarSesion {

    CucumberEnvironment environment = new CucumberEnvironment();
    DefinicionSteps definicionSteps = new DefinicionSteps(environment);


    @Given("^cargo la pagina University$")
    public void cargo_la_pagina_University() {
        String SDETUniversityPath = "http://sdettraining.com/trguitransactions/AccountManagement.aspx";
        definicionSteps.voyALaUrl(SDETUniversityPath);
    }

    @Given("^Estoy autenticado en la empresa \"([^\"]*)\" con el usuario \"([^\"]*)\" y la contrasena \"([^\"]*)\"$")
    public void estoyAutenticadoEnLaEmpresaConElUsuarioYLaContrasena(String empresa, String usuario, String password) throws Throwable {
        IngresarTextoEnCampo(empresa, usuario, password);
    }

    private void IngresarTextoEnCampo(String idCampo, String texto, Keys finalKeys) {
        WebElement campo = driver.findElement(By.id(idCampo));
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(campo));
        campo.clear();
        campo.sendKeys(texto);
        campo.sendKeys(finalKeys);
    }

}
