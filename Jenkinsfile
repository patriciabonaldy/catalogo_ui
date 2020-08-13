pipeline {
  agent none
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('test') {
        steps {
            sh 'npm run test -- --coverage --watchAll=false'
        }
    }

    stage('Deliver') {
      steps {
        sh 'npm run start'
      }
    }

  }
}