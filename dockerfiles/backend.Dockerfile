FROM node:16.14.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Install npm dependencies
COPY ./backend/package.json /usr/src/app/package.json
RUN npm install

# copy over the source files
COPY ./backend /usr/src/app

CMD npm run dev
