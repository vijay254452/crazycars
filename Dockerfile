# Use Tomcat base image
FROM tomcat:9.0

# Remove default ROOT
RUN rm -rf /usr/local/tomcat/webapps/ROOT

# Copy WAR with correct name
COPY target/car-website-1.0.0.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080
CMD ["catalina.sh", "run"]
