# Use a lightweight Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# # Build the application
# RUN npm run build

# specify the port that the server should listen on
# ENV PORT=8000
# Expose the port on which the application will run
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
