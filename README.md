# Expense Tracker

A simple full-stack Expense Tracker application that allows users to add, view, update, and delete expenses and calculate the total expense.

## Features

- Add a new expense
- View all expenses
- View an expense by ID
- Update an existing expense
- Delete an expense
- Calculate total expenses
- Store expense data in MySQL
- RESTful API using Spring Boot

## Technology Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

### Frontend
- HTML
- CSS
- JavaScript

### Database
- MySQL

## Project Architecture

```text
Frontend (HTML/CSS/JavaScript)
            |
            | HTTP Requests
            ↓
     Spring Boot REST API
            |
            ↓
       Controller
            |
            ↓
         Service
            |
            ↓
       Repository
            |
            ↓
      JPA / Hibernate
            |
            ↓
          MySQL
```

## Project Structure

```text
expense-tracker/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── gowthami/
│       │           └── expensetracker/
│       │               ├── ExpenseTrackerApplication.java
│       │               │
│       │               ├── controller/
│       │               │   └── ExpenseController.java
│       │               │
│       │               ├── service/
│       │               │   └── ExpenseService.java
│       │               │
│       │               ├── repository/
│       │               │   └── ExpenseRepository.java
│       │               │
│       │               └── entity/
│       │                   └── Expense.java
│       │
│       └── resources/
│           └── application.properties
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── pom.xml
```

## Database

Create the MySQL database:

```sql
CREATE DATABASE expense_tracker;
```

The application uses an `expense` table containing:

| Column | Type | Description |
|---|---|---|
| id | BIGINT | Unique expense ID |
| description | VARCHAR | Expense description |
| category | VARCHAR | Expense category |
| amount | DOUBLE | Expense amount |

The table is created/updated automatically by Hibernate using the configured JPA settings.

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/expenses` | Add an expense |
| GET | `/api/expenses` | Get all expenses |
| GET | `/api/expenses/{id}` | Get expense by ID |
| PUT | `/api/expenses/{id}` | Update an expense |
| DELETE | `/api/expenses/{id}` | Delete an expense |
| GET | `/api/expenses/total` | Get total expense |

## How It Works

When a user adds an expense from the frontend, JavaScript sends a POST request to the Spring Boot backend.

The request follows this flow:

```text
User
 ↓
HTML Form
 ↓
JavaScript fetch()
 ↓
ExpenseController
 ↓
ExpenseService
 ↓
ExpenseRepository
 ↓
JPA / Hibernate
 ↓
MySQL
```

When the data is stored successfully, the frontend retrieves the updated expense list and displays it.

The same architecture is used for updating and deleting expenses.

## How to Run

### 1. Start MySQL

Make sure MySQL is running.

Create the database:

```sql
CREATE DATABASE expense_tracker;
```

### 2. Configure Database

Update the database username and password in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

### 3. Run the Backend

From the Spring Boot project directory:

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### 4. Run the Frontend

Open the frontend directory:

```bash
cd frontend
```

Run:

```bash
npx serve .
```

The frontend will be available at:

```text
http://localhost:3000
```

## Example

A user can enter:

```text
Description: College Workshop
Category: Education
Amount: 500
```

The application sends the data to:

```text
POST /api/expenses
```

and stores it in MySQL.

The expense can then be viewed, edited, or deleted from the application.

## Future Improvements

Possible future enhancements include:

- User authentication
- Expense filtering by category
- Monthly expense reports
- Expense charts and analytics
- Date-based expense tracking
- Improved validation

## Purpose

This project was developed to understand and demonstrate:

- Java backend development
- Spring Boot REST APIs
- Layered architecture
- Spring Data JPA
- Hibernate
- MySQL database integration
- Frontend and backend communication
- CRUD operations
