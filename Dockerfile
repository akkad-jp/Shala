FROM node:22.14-bookworm

WORKDIR /app

RUN apt-get update && \
    npm install -g npm && \
    npm install -g @vue/cli

EXPOSE 5173
