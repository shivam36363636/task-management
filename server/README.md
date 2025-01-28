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
- GET `/profile/get` - Get user profile
- POST `/profile/create` - Create user profile
- PUT `/profile/update` - Update user profile

### Task Endpoints
- GET `/task` - Get all tasks
- POST `/task` - Create new task
- GET `/task/:id` - Get specific task
- PUT `/task/:id` - Update task
- DELETE `/task/:id` - Delete task
- 
### Comment Endpoints
- POST `/comment` - Create new comment
- GET `/comment/:taskId` - Get comments by task id

## Environment Setup

1. Create a `.env` file with: