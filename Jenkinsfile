pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "car-website:latest"
        CONTAINER_NAME = "car-app"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/yourusername/car-website.git'
            }
        }

        stage('Build WAR with Maven') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                    if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
                        docker rm -f $CONTAINER_NAME || true
                    fi
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3489:8080 --name $CONTAINER_NAME $DOCKER_IMAGE'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful! Access the app on http://<server-ip>:8080"
        }
        failure {
            echo "❌ Build or Deployment failed. Check logs."
        }
    }
}

