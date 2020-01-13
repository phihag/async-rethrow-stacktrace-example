# docker build -t stackt . && docker run -it --rm stackt
FROM node:13

ADD . .

CMD node --async-stack-traces crash.js
