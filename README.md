# Student Management REST API

Web Dev III – Unit 2 | Assignment 2

A REST API built with Node.js and Express.js to manage student records using in-memory array/JSON data (no database).

## Project Structure

```
student-management-api/
├── app.js
├── package.json
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Setup Instructions (VS Code)

1. Unzip the folder and open it in VS Code.
2. Open a terminal in VS Code (`` Ctrl + ` ``).
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
5. You should see:
   ```
   Server is running on http://localhost:3000
   ```

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|---------------------------|
| GET    | /students        | Get all students          |
| GET    | /students/:id    | Get a student by id       |
| POST   | /students        | Create a new student      |
| PUT    | /students/:id    | Update an existing student|
| DELETE | /students/:id    | Delete a student          |

## Testing with Postman

### 1. GET all students
`GET http://localhost:3000/students`

### 2. GET single student
`GET http://localhost:3000/students/1`

### 3. POST create student
`POST http://localhost:3000/students`
Body (raw JSON):
```json
{
  "name": "Sneha",
  "course": "MCA"
}
```

### 4. PUT update student
`PUT http://localhost:3000/students/1`
Body (raw JSON):
```json
{
  "course": "MTech"
}
```

### 5. DELETE student
`DELETE http://localhost:3000/students/1`

## Status Codes Used

- 200 – Success
- 201 – Created
- 400 – Bad Request (invalid id / missing fields)
- 404 – Not Found (student or route doesn't exist)
- 500 – Internal Server Error

## Notes

- Data is stored in-memory (`data/students.js`) as a JS array — restarting the server resets it to the default 3 students.
- Every request is logged to the console via the custom logger middleware (`middleware/logger.js`) showing method, URL, and timestamp.
