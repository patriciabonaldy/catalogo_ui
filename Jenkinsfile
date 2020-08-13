pipeline {
  agent none

  stages {
    stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
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
