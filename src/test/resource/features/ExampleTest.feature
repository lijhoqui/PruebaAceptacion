Feature: Tests de Ejemplo
    Como un Usuario
    Quiero
    Para

    Scenario: Hacer una busqueda en Google
        Given Voy a la pagina "http://www.google.com"
        And Tomo un screenshot
        When  Busco la palabra Ceiba
        And Tomo un screenshot
        Then  Aparece la pagina web de Ceiba
        And Tomo un screenshot
