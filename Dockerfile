# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Label the image with the name of the maintainer
LABEL maintainer="iamtope"

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose a port (e.g., 3000) to access the app
EXPOSE 3000

# Define the command to run when the container starts
CMD ["npm", "start"]
