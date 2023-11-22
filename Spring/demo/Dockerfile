#installing JDK
FROM openjdk:21-jdk

#Define project directory and copy all
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} demoapplication.jar

#Defining the port inside the container
EXPOSE 9980

#Run project
ENTRYPOINT ["java","-jar","/demoapplication.jar"]