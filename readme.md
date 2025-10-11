Real-Time Chat Application
A full-stack, real-time messaging application built with the MERN stack and Socket.io, enabling instant one-on-one communication between users.

Features

User Authentication – Secure user registration and login system
Protected Routes – Authentication-based access control for chat functionality
Real-Time Messaging – Instant message delivery using Socket.io WebSocket connections
User Discovery – Browse and search registered users by username or full name
Online Presence – Live online/offline status indicators for connected users
Responsive Design – Modern, mobile-friendly interface built with Tailwind CSS and DaisyUI

Technology Stack

Frontend:

React with Vite for optimized development and build performance
Redux Toolkit for centralized state management
React Router DOM for client-side navigation and route protection
Tailwind CSS and DaisyUI for modern, responsive styling

Backend:

Node.js and Express for server runtime and REST API
MongoDB with Mongoose for database and object data modeling
Socket.io for real-time, bidirectional communication
JWT and bcryptjs for authentication and password encryption

Prerequisites

Node.js (v14 or higher recommended)
MongoDB instance (local or cloud-based)

Installation and Setup
Environment Configuration:
Create a .env file in the server directory:
MONGODB_URL="your_mongodb_connection_string"
JWT_SECRET="your_secure_secret_key"
JWT_EXPIRES="15d"
COOKIE_EXPIRES=7
PORT=5000
CLIENT_URL="http://localhost:5173"
Create a .env file in the client directory:
VITE_DB_URL="http://localhost:5000/api/v1"
VITE_DB_ORIGIN="http://localhost:5000"
Install dependencies and run the application

Development
The server runs with nodemon for automatic restart on file changes. The client uses Vite's Hot Module Replacement (HMR) for instant updates during development.
Security Considerations

Passwords are hashed using bcryptjs before storage
JWT tokens are used for stateless authentication
HTTP-only cookies provide additional CSRF protection
Protected routes ensure unauthorized users cannot access chat functionality


