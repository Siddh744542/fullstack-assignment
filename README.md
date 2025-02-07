# Task Manager App
## Installation Guide

### Prerequisites
Make sure you have the following installed:
- Node.js
- PostgreSQL
- npm

### Setup Instructions

#### 1. Clone the Repository
```sh
git clone https://github.com/Siddh744542/fullstack-assignment.git
cd fullstack-assignment
```

#### 2. Backend Setup
```sh
cd backend
npm install  
```

- Configure the `.env` file inside the `backend` directory:
```env
DATABASE_URL="postgresql://youruser:yourpassword@localhost:5432/yourdatabase"
```
- Run the Prisma migrations to set up the database:
```sh
npx prisma migrate dev --name init
```
- Start the backend server:
```sh
node src/index.js
```

#### 3. Frontend Setup
```sh
cd ../frontend
npm install 
```
- Start the frontend server:
```sh
npm run dev
```

The frontend should now be running at `http://localhost:5173` and the backend at `http://localhost:8000`.

---

## Screenshots
### Home Page
![image](https://github.com/user-attachments/assets/675ea051-af3e-4b8c-8cb1-e53bb5ebf431)
### Add new Task 
![image](https://github.com/user-attachments/assets/4975d674-5162-4e87-9505-836e28bf87cc)
### Edit Task
![image](https://github.com/user-attachments/assets/c11e7795-f83a-46f8-9f11-78f28bac1954)
### Delete Task
![image](https://github.com/user-attachments/assets/783589b8-e732-4959-8796-8e34deb8c4f2)






