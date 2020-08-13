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
    dockerHome = tool 'myDocker'
    docker = '/usr/bin/docker'
    PATH = '$docker:$PATH'
  }
}
