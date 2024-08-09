# Use the official Node.js image.
FROM node:18-alpine

# Set the working directory.
WORKDIR /app

# Copy the project files.
COPY . .

# Install dependencies.
RUN npm install

# Build the app for production.
RUN npm run build

# Install a static server to serve the built files.
RUN npm install -g serve

# Expose the port that serve uses.
EXPOSE 5000

# Start the application.
CMD ["serve", "-s", "build", "-l", "5000"]
