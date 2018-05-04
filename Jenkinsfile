pipeline {
   agent any

    triggers{
        cron('H H(9-18) * * *')
    }

    stages{
       stage('Inicio'){
           steps{
               bat 'echo "Se inicia el proceso de pruebas"'
               bat "echo 'BRANCH_NAME is ' ${env.BRANCH_NAME}"
           }
       }

       stage('Checkout'){
           steps{
               bat 'echo "Se inicia el Checkout"'
              checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/lijhoqui/PruebaAceptacion']]])

           }
       }

       stage('Build'){
           steps{
               bat 'gradlew build'
           }
       }

       stage('Pruebas aceptacion'){
           steps{
               bat 'gradlew accepttest'
           }
       }

       stage('Despliegue'){
           when {
               branch 'master'
           }
           steps{
               bat 'echo "Estoy en la master"'
           }
       }

   }

   post{
       always{
           script {
              if (currentBuild.result == null) {
                  currentBuild.result = 'SUCCESS'
              }
           }
           publishHTML target: [
                       allowMissing: true,
                       alwaysLinkToLastBuild: false,
                       keepAll: true,
                       reportDir: 'build\\reports\\tests\\prueba',
                       reportFiles: 'index.html',
                       reportName: 'Tests Repor']

            cucumber 'build/reports/tests/prueba/json/cucumber.json'
           step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: 'lina.quintero@ceiba.com.co', sendToIndividuals: true])
       }
   }
}