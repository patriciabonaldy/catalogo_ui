pipeline {
  stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "/usr/bin/docker:${env.PATH}"
  }
  agent {
    def dockerHome = tool 'myDocker'
        env.PATH = "/usr/bin/docker:${env.PATH}"
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
