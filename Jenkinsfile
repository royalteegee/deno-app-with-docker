pipeline {
  agent any
  environment {
    DOCKERHUB_USER = credentials('DOCKER_USER')
    DOCKERHUB_PASSWORD = credentials('DOCKER_PASSWORD')
  }
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/AOKingsax/deno-app-with-docker', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t royalkingsax/denoapp3:latest .' 
      }
    }

    stage('Log into Dockerhub') {
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

    stage('Push to DockerHub') {
      steps {
        sh 'docker push royalkingsax/denoapp3:latest'
      }
    }

  }
}