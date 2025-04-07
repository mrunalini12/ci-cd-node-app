# Use Node.js base image
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Expose the app port
EXPOSE 3000

# Command to run app
CMD ["npm", "start"]
