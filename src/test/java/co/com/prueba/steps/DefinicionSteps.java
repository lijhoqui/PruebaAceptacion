package co.com.prueba.steps;

import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class DefinicionSteps {

    private WebDriver driver;
    private CucumberEnvironment environment;

    public DefinicionSteps(CucumberEnvironment environment) {
        this.environment = environment;
        this.driver = environment.getDriver();
    }

    @When("^Voy a la pagina \"([^\"]*)\"$")
    public void voyALaUrl(String url) {
        irALaUrl(url);
    }

    private void irALaUrl(String url) {
        driver.get(url);
    }


}

