pipeline {
  stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
  }
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
}
