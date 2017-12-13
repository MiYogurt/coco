pipeline {
  agent any
  stages {
    stage('test') {
      parallel {
        stage('test') {
          steps {
            echo 'hello'
            sh 'echo "123"'
          }
        }
        stage('test01') {
          steps {
            echo '3333'
          }
        }
      }
    }
    stage('build') {
      steps {
        echo 'build success'
      }
    }
    stage('deploy') {
      steps {
        echo '3333'
      }
    }
  }
}