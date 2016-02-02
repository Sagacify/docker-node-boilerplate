FROM mhart/alpine-node:0.10.40

ENV APP_NAME sagaboilerplate
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

WORKDIR /var/www

COPY ./package.json /var/www/package.json
RUN npm install

COPY ./src /var/www/src
COPY ./config /var/www/config
COPY ./package.json /var/www/package.json
COPY ./index.js /var/www/index.js

CMD ["npm", "start"]
