FROM node:16
WORKDIR /usr/src/app
COPY  . .
RUN npm install
USER node
ENV REDIS_URL=redis://172.26.227.173:6300 MONGO_URL=mongodb://test:test@172.26.227.173:3456/todo-database
CMD npm start
