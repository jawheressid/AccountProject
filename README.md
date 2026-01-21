# Accounts Manager - Full Stack Application

## Application Overview

A full-stack web application for managing accounts with:
- **Backend**: Spring Boot 4.0.2 with MongoDB
- **Frontend**: Angular 21.1.0 standalone components
- **Database**: MongoDB (localhost:27017)

## Prerequisites

- Java 17+
- Node.js & npm
- MongoDB running on localhost:27017

## Getting Started

### 1. Start MongoDB
Ensure MongoDB is running on `localhost:27017` with database `accountsdb`

### 2. Start Backend (Terminal 1)
```bash
cd .\net.guides.springboot2
.\mvnw.cmd spring-boot:run
```
- Runs on: http://localhost:8080
- Look for: "Tomcat started on port 8080"

### 3. Start Frontend (Terminal 2)
```bash
cd .\angular8-springboot-client
npm start
```
- Runs on: http://localhost:4200
- Automatically opens in browser

## Testing the Application

### 1. Add Account
- Click "Add Account" button
- Fill in all fields:
  - First Name
  - Last Name
  - CIN
  - Account Number
  - Agency
  - Amount
- Click "Save Account"
- Account appears in list automatically
- Form closes and returns to list

### 2. View Account Details
- Click "View" button next to any account
- Details display in the right panel
- Click "Edit" button to modify or "Close" to return

### 3. Edit Account
- Click "Edit" button next to any account
- Form displays with current data in right panel
- Modify any field
- Click "Update Account"
- Changes apply immediately
- Returns to list automatically

### 4. Delete Account
- Click "Delete" button next to any account
- Confirm deletion in popup
- Account removed from list
- Returns to list automatically

### 5. Auto-Refresh
- List updates automatically every 3 seconds
- No manual refresh needed
- See changes from other users in real-time

## API Endpoints

Backend REST API (http://localhost:8080):
- `GET /api/v1/accounts` - Get all accounts
- `GET /api/v1/accounts/{id}` - Get account by ID
- `POST /api/v1/accounts` - Create new account
- `PUT /api/v1/accounts/{id}` - Update account
- `DELETE /api/v1/accounts/{id}` - Delete account

**MongoDB connection error**
- Verify MongoDB is running
- Check connection string: `mongodb://localhost:27017/accountsdb`

**CORS errors in browser console**
- Backend is configured with CORS for `http://localhost:4200`
- Verify both services are on correct ports

## Project Structure

```
net.guides.springboot2/
├── src/main/java/net/guides/springboot2/
│   ├── Application.java (Spring Boot entry point)
│   ├── controller/
│   │   └── AccountController.java (REST API)
│   ├── model/
│   │   └── Account.java (MongoDB document)
│   ├── repository/
│   │   └── AccountRepository.java (Data access)
│   └── exception/
│       └── ResourceNotFoundException.java
└── angular8-springboot-client/
    └── src/app/
        ├── app.ts (Root component)
        ├── account-list/ (List with table)
        ├── create-account/ (Add form)
        ├── update-account/ (Edit form)
        └── account-details/ (View details)
```

## Notes
- After adding or updating click Accounts to refresh list
- Data persists in MongoDB database
- Frontend caches data for 3 seconds between refreshes
- All operations update the database in real-time

---
**Status**: Fully Functional
**Last Updated**: January 21, 2026
