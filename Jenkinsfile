pipeline {
  agent {
    docker {
      image 'node:13.12.0-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}