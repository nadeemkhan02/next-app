# Next.js Authentication App  

This is a authentication app built with Next.js, demonstrating core concepts like file-based routing, API routes, MongoDB integration, and JWT-based authentication.  

## Features  

- **Authentication**: Login and Signup pages with secure authentication.  
- **API Routes**: Backend endpoints for user registration and login.  
- **JWT Token**: Generates and returns a JSON Web Token (JWT) upon successful login for authorization.  
- **Profile Page**: Displays user-specific information for authenticated users.  
- **MongoDB Atlas Integration**: All user data is securely stored in a MongoDB Atlas database.  

## Routes  

### API Routes  

- **Login**: `POST /api/users/login`  
  - Description: Authenticates a user and returns a JWT token.  
- **Signup**: `POST /api/users/signup`  
  - Description: Registers a new user in the MongoDB database.  

### Frontend Pages  

- **Login Page**: `/login`  
- **Signup Page**: `/signup`  
- **Profile Page**: `/profile` (Protected route – only accessible to authenticated users)  

## Technologies  

- [Next.js](https://nextjs.org/)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database storage  
- [Mongoose](https://mongoosejs.com/) for MongoDB object modeling  
- [JWT](https://jwt.io/) for token-based authentication 
- [React Hook Form](https://react-hook-form.com/) for form handling  
- [Tailwind CSS](https://tailwindcss.com/) for styling (optional)  

## Setup  

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd <project-directory>

login page:
<img width="1459" alt="Screenshot 2024-12-18 at 12 55 40 PM" src="https://github.com/user-attachments/assets/beb92d19-6b96-4474-a1b9-c8dfbba5c6a1" />
Sign up page:
<img width="1470" alt="Screenshot 2024-12-18 at 12 55 25 PM" src="https://github.com/user-attachments/assets/595d5576-f334-4443-959d-2c620fb05ae3" />

