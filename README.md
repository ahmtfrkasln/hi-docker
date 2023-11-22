# hi-docker
Dockerised basic spring boot and angular app

Spring: 

1- Via maven clean the package and create jar file
*\Spring\demo> mvn clean package

2- In the spring boot project directory, via Dockerfile generate docker image 
*\Spring\demo> docker build -t springdockerapp .

3- Create a container with the spring docker image and define the ports. Port 8080 is defined in spring property file, docker container listens its own 8080 port and serves it on 8082 port of the localhost
*> docker run -d -p 8082:8080 springdockerapp

Angular: 

1- In the angular project directory, via Dockerfile generate docker image. All of the configurations are in the Dockerfile.
*\Angular\docker-demo> docker build -t hi-docker .

2- Create a container with the angular docker image and define the ports. Port 80 is defined in Dockerfile as nginx port, docker container listens its own 80 port and serves it on 8081 port of the localhost
*> docker run -d -p 8081:80 hi-docker

Finally: 
http://localhost:8081/
