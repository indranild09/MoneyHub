# BACKEND GUIDE

> Complete Backend Documentation for MoneyHub

---

# Overview

The backend is built using **Node.js**, **Express.js**, **Prisma ORM**, and **Supabase PostgreSQL**.

It follows a **Layered Architecture**, where each layer has a single responsibility.

```
Client Request
      │
      ▼
Routes
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Prisma ORM
      │
      ▼
Supabase PostgreSQL
```

---

# Backend Folder Structure

```
backend

├── prisma
│   ├── schema.prisma
│   ├── seed.js
│   └── migrations/
│
├── src
│
│   ├── config
│   │     prisma.js
│   │
│   ├── controllers
│   │     bank.controller.js
│   │     interestRate.controller.js
│   │     calculator.controller.js
│   │
│   ├── middleware
│   │     errorHandler.js
│   │     validateCalculationRequest.js
│   │     validateCompareRequest.js
│   │
│   ├── routes
│   │     bank.routes.js
│   │     interestRate.routes.js
│   │     calculator.routes.js
│   │
│   ├── services
│   │     bank.service.js
│   │     interestRate.service.js
│   │     calculator.service.js
│   │
│   ├── utils
│   │     ApiError.js
│   │     ApiResponse.js
│   │     asyncHandler.js
│   │
│   ├── app.js
│   └── server.js
│
├── package.json
└── .env
```

---

# Architecture

The backend follows:

**Layered Architecture**

Every request passes through:

```
Route

↓

Validation Middleware

↓

Controller

↓

Service

↓

Prisma ORM

↓

Database
```

This keeps the code modular and easy to maintain.

---

# server.js

## Purpose

Starts the Express application.

Responsibilities

- Start HTTP server
- Read PORT
- Listen for incoming requests

---

# app.js

## Purpose

Application configuration.

Responsibilities

- Register middleware
- Register routes
- Configure CORS
- Configure JSON parsing
- Global error handler

---

# Config

## prisma.js

Purpose

Creates a single Prisma Client instance.

Instead of creating multiple database connections, the same Prisma client is reused throughout the application.

---

# Controllers

Controllers receive HTTP requests.

Controllers **should never contain business logic.**

They should only:

- Receive Request
- Call Service
- Return Response

---

## bank.controller.js

Responsibilities

- Get all banks

Calls

```
getAllBanks()
```

---

## interestRate.controller.js

Responsibilities

- Return available interest rates

Calls

```
getAllInterestRates()
```

---

## calculator.controller.js

Responsibilities

- Calculate FD
- Calculate RD
- Compare Banks

Calls

```
calculateReturns()

compareReturns()
```

---

# Services

Services contain all business logic.

This is the most important layer.

---

## bank.service.js

Responsibilities

- Retrieve banks
- Query Prisma

Returns

```
Array<Bank>
```

---

## interestRate.service.js

Responsibilities

- Retrieve interest rates
- Match bank
- Match customer type
- Match deposit type
- Match tenure

Returns

```
InterestRate Object
```

---

## calculator.service.js

Contains:

### calculateFD()

Calculates

- Compound Interest
- Maturity Amount

Returns

```
Interest Earned

Maturity Amount
```

---

### calculateRD()

Calculates

Recurring Deposit maturity.

Uses

Monthly investment formula.

Returns

```
Interest Earned

Maturity Amount
```

---

### calculateReturns()

Main business function.

Steps

1.

Validate request

↓

2.

Retrieve interest rate

↓

3.

Determine FD or RD

↓

4.

Run calculation

↓

5.

Return response

---

### compareReturns()

Steps

1.

Get all banks

↓

2.

Loop every bank

↓

3.

Retrieve matching interest rate

↓

4.

Calculate returns

↓

5.

Store result

↓

6.

Sort by maturity amount

↓

7.

Return ranked list

---

# Routes

---

## bank.routes.js

```
GET /banks
```

Returns all banks.

---

## interestRate.routes.js

```
GET /interest-rates
```

Returns all interest rates.

---

## calculator.routes.js

```
POST /calculator
```

Calculates returns.

---

```
POST /calculator/compare
```

Compares all banks.

---

# Middleware

Middleware executes before controllers.

---

## validateCalculationRequest.js

Checks

- Bank
- Deposit Type
- Customer Type
- Amount
- Months

Rejects invalid requests.

---

## validateCompareRequest.js

Same as above except

Bank is NOT required.

---

## errorHandler.js

Global error middleware.

Returns standardized JSON errors.

---

# Utilities

---

## ApiResponse.js

Standard success response.

Example

```json
{
    "success":true,
    "data":{}
}
```

---

## ApiError.js

Standard error object.

Example

```json
{
    "success":false,
    "message":"Bank not found"
}
```

---

## asyncHandler.js

Wraps async functions.

Avoids repetitive

```
try
catch
```

blocks.

---

# Database Access

Database queries are only performed inside Services.

Controllers never access Prisma directly.

Example

```
Controller

↓

Service

↓

Prisma

↓

Database
```

---

# Validation Rules

Calculate API

Requires

- Bank
- Deposit Type
- Customer Type
- Amount
- Months

---

Compare API

Requires

- Deposit Type
- Customer Type
- Amount
- Months

Bank is optional.

---

# Error Handling

Errors are thrown using

```
ApiError
```

Global middleware catches every error.

Returns

```
400

404

500
```

depending on situation.

---

# Environment Variables

```
DATABASE_URL
```

Uses

Supabase Session Pooler

Never use Direct Connection in production.

---

# Deployment

Backend

Hosted on

Render

Database

Supabase PostgreSQL

---

# Request Lifecycle

```
Client

↓

Express Route

↓

Validation Middleware

↓

Controller

↓

Service

↓

Prisma

↓

Supabase

↓

Controller

↓

Response

↓

Frontend
```

---

# Best Practices Used

✔ Layered Architecture

✔ Single Responsibility Principle

✔ Reusable Services

✔ Standard API Responses

✔ Validation Middleware

✔ Global Error Handling

✔ Prisma ORM

✔ Environment Variables

✔ Async Handler

---

# Current Backend Status

Completed

✔ Banks API

✔ Interest Rate API

✔ Calculator API

✔ Compare API

✔ Validation

✔ Error Handling

✔ Database Integration

✔ Deployment

---

# Future Backend Improvements

- JWT Authentication
- Admin Panel APIs
- CRUD for Banks
- CRUD for Interest Rates
- Historical Interest Rates
- Rate Scheduler
- Redis Caching
- Unit Tests
- API Documentation (Swagger)
- Request Logging
- Rate Limiting
- Docker Support

---

# Developer Notes

1.

Never place business logic inside Controllers.

Always use Services.

2.

Database queries should only use Prisma.

3.

Create new APIs using

```
Route

↓

Controller

↓

Service
```

4.

Always validate requests before Controllers.

5.

Use ApiResponse and ApiError for consistency.

6.

Production database must always use Supabase Session Pooler.

7.

Keep controllers small.

Keep services reusable.

This makes future development much easier.