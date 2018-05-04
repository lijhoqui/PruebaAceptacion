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


       sucess{
             echo 'This will run only if successful'
              publishHTML target: [
                                    allowMissing: true,
                                    alwaysLinkToLastBuild: false,
                                    keepAll: true,
                                    reportDir: 'build\\reports\\tests\\accepttest',
                                    reportFiles: 'index.html',
                                    reportName: 'Reporte de Pruebas',
                                    reportTitles: ''
                                  ]


       }
        failure {
              echo 'This will run only if failed'
              //send notifications about a Pipeline to an email
              mail (to: 'lina.quintero@ceiba.com.co',
              subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
              body: "Something is wrong ")
       }
       unstable {
         echo 'This will run only if the run was marked as unstable'
       }
   }
}