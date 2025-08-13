FROM nginx:1.27-alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy your portfolio files to nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# nginx image already has CMD configured



# If you want to deploy it online
# scp -r /home/omokaro/Desktop/portfolio user@your-server-ip:/opt/portfolio

# SSH into the server
# ssh user@your-server-ip

# Install Docker on the server
# curl -fsSL https://get.docker.com | sh

# Run it on the server
# cd /opt/portfolio
#sudo docker compose up --build -d

# Access it via the server IP
# http://your-server-ip:8080
# (If you map 80:80 instead of 8080:80, you can just type the IP without the port.)




# for react app dockerfile
# Stage 1: Build React app

# FROM node:18-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve with nginx
# FROM nginx:1.27-alpine
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# the docker compose

# services:
#   portfolio:
#     build: .
#     ports:
#       - "8080:80"
#     restart: unless-stopped


# Build and run
# sudo docker compose up --build -d


# Then open:
# http://localhost:8080



#  Development setup with hot reload
# We’ll run your app in Node inside a container, map your code, and forward Vite’s dev server port.

# services:
#   portfolio-dev:
#     image: node:18-alpine
#     working_dir: /app
#     volumes:
#       - .:/app            # Mount current folder into container
#       - /app/node_modules # Avoid overwriting node_modules with host
#     ports:
#       - "5173:5173"       # Vite default port
#     command: sh -c "npm install && npm run dev -- --host 0.0.0.0"


# Running in dev mode
# sudo docker compose -f docker-compose.dev.yml up

# Then visit:
# http://localhost:5173
