pipeline {
  agent {
    docker {
      image 'node:13.12.0-alpine'
      args '--network mynet'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
  environment {
    PATH = '"/usr/bin/docker:${env.PATH}"'
  }
}