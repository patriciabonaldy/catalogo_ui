pipeline {
  stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "/usr/bin/docker:${env.PATH}"
  }
  agent {
    def dockerHome = tool 'myDocker'
        env.PATH = "/usr/bin/docker:${env.PATH}"
    docker {
      def dockerHome = tool 'myDocker'
          env.PATH = "/usr/bin/docker:${env.PATH}"
      image 'node:13.12.0-alpine'
      args '--network mynet'
    }

  }
  stages {
    
    stage('Build') {
      def dockerHome = tool 'myDocker'
          env.PATH = "/usr/bin/docker:${env.PATH}"
      steps {
        sh 'npm install'
      }
    }

  }
}
