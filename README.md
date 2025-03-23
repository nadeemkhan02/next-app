# 🔐 Next.js Authentication App

This is a full-stack authentication app built with **Next.js**, demonstrating core concepts like file-based routing, API routes, MongoDB integration, and **JWT-based authentication**.

---

## 📌 Features

- ✅ **Secure User Authentication**  
  Login and signup system using hashed passwords and JWT token management.

- ✅ **JWT-Based Authorization**  
  JSON Web Tokens (JWT) are issued on login and securely stored for accessing protected routes.

- ✅ **Protected Routes / Middleware Auth**  
  Profile and other sensitive pages are protected using authentication checks, allowing access only to authorized users.

- ✅ **MongoDB Atlas Integration**  
  All user data is securely stored in a MongoDB Atlas cloud database using Mongoose.

- ✅ **Form Validation with React Hook Form**  
  Seamless form handling and validation.

- ✅ **Serverless API Routes (Next.js)**  
  Backend functionality is handled via Next.js API routes — no separate backend server required.

- ✅ **Password Encryption with Bcrypt**  
  User passwords are hashed before storage to enhance security.

- ✅ **Session Persistence (JWT in HTTP-only Cookies)** *(optional)*  
  Tokens can be stored in HTTP-only cookies for improved session management.

- ✅ **Dynamic Routing (App Router)**  
  Uses file-based routing via the Next.js App Router system.

- ✅ **Environment-based Configuration**  
  Easily switch between dev and production using `.env.local`.

- ✅ **Tailwind CSS for Styling**  
  Utility-first styling for fast UI development and responsive design.

- ✅ **Modular Folder Structure**  
  Clean, scalable codebase with separation of concerns.

- ✅ **Loading States & Enhanced UX**  
  Smooth loading indicators and user feedback messages.

- ✅ **Error Handling**  
  User-friendly error messages for all major failure points (validation, login errors, etc.)

---

## 📂 Project Structure


---

## 🔐 API Routes

### `POST /api/users/login`
- Authenticates a user and returns a JWT token.

### `POST /api/users/signup`
- Registers a new user in the MongoDB database.

---

## 🖥 Frontend Routes

| Page        | Path         | Description                              |
|-------------|--------------|------------------------------------------|
| Login Page  | `/login`     | User login interface                     |
| Signup Page | `/signup`    | Register new user                        |
| Profile     | `/profile`   | Protected page - accessible on login only|

---

## 🔧 Technologies Used

- [Next.js](https://nextjs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [JWT (jsonwebtoken)](https://jwt.io/)
- [React Hook Form](https://react-hook-form.com/)
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📥 Setup Instructions

1. **Clone the Repository**
```bash
git clone <repository-url>
cd <project-directory>
