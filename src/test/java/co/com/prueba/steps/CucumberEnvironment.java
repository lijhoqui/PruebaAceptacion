package co.com.prueba.steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class CucumberEnvironment {

    private WebDriver driver;
    private Scenario scenario;

    public CucumberEnvironment() {
        String chromeDriverPath = "src/test//resource/drivers/chromedriver.exe";
        System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @Before
    public void setup(Scenario scenario){
        this.scenario = scenario;
    }

    @After
    public void dispose(){
        driver.quit();
    }

    public WebDriver getDriver() {
        return driver;
    }

    public Scenario getScenario() {
        return scenario;
    }
}
