FROM ubuntu:latest

MAINTAINER Paul Smith "paul@paulsmith.io"

ENV \
  HOME=/maesterbot \
  ARCHIVEPATH=/usr/src/arch \
  NPM_CONFIG_LOGLEVEL=info \
  NODE_VERSION=5.10.1

RUN \
  # Install required packages
  apt-get update \
  && apt-get install -y \
    build-essential \
    curl \
    libhiredis-dev \
    ncurses-dev \
  # Make directories for building stuff
  && mkdir -p ${HOME} \
  && mkdir -p ${ARCHIVEPATH} \
  # Install Node
  && curl -fSL "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" -o ${ARCHIVEPATH}/nodejs.tar.gz \
  && tar -xJC /usr/local -f ${ARCHIVEPATH}/nodejs.tar.gz  --strip-components=1 \
  # Clean up
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* ${ARCHIVEPATH}


WORKDIR $HOME

COPY app $HOME/app
COPY package.json $HOME
RUN npm install

CMD [ "npm", "start" ]
