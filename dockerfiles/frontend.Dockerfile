FROM node:16.14.0

ARG PORT
ARG BACKEND_URL

ENV REACT_APP_PORT ${port}
ENV REACT_APP_BACKEND_URL ${BACKEND_URL}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install npm dependencies
COPY ./frontend/package.json /usr/src/app/package.json
RUN npm install

# copy over the source files
COPY ./frontend /usr/src/app

# Build the app
RUN npm run build

CMD npm start
