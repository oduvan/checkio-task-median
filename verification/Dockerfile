FROM ubuntu
MAINTAINER CheckiO

ADD ./envs/data /data
ADD ./envs/ /envs
ADD ./src/ /src

RUN apt-get update
RUN apt-get install python3.4
#RUN apt-get install aptitude
RUN apt-get install -y python-virtualenv

##!REPLACE-BY-ENVS

# Set the entrypoint to memcached binary
ENTRYPOINT aptitude search python-virtualenv