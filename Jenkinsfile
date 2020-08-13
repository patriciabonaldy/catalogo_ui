pipeline {
    environment {
        CI = 'true'
    }
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
                sh 'npm install npm@latest -g && npm run build && npm start'
            }
        }
    }
}