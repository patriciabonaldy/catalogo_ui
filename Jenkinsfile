pipeline {
  agent none
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deliver') {
      steps {
        sh 'npm start'
      }
    }

    stage('') {
      steps {
        echo 'Hooola'
      }
    }

  }
}