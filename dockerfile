FROM node:22.13.1
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "both"]

