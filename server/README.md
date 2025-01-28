# Task Management API Server

This is the backend API server for the Task Management Application, built to support the Next.js frontend client.

## Features

### 1. User Management
- User authentication and authorization
- JWT token-based authentication
- User profile management with detailed information:
  - Personal details (name, job profile, location)
  - Professional info (department, team, skills)
  - Contact details (email, phone, timezone)
  - Status tracking and activity timestamps

### 2. Task Management
- CRUD operations for tasks
- Task filtering and sorting
- Priority and status management
- Task assignment and ownership

## API Endpoints

The API is hosted at: `https://task-management-backend-wxz7.onrender.com/api`

### Authentication Endpoints
- POST `/auth/login` - User login
- POST `/auth/register` - User registration

### User Endpoints
- GET `/users/profile` - Get user profile
- PUT `/users/profile` - Update user profile

### Task Endpoints
- GET `/tasks` - Get all tasks
- POST `/tasks` - Create new task
- GET `/tasks/:id` - Get specific task
- PUT `/tasks/:id` - Update task
- DELETE `/tasks/:id` - Delete task

## Environment Setup

1. Create a `.env` file with: