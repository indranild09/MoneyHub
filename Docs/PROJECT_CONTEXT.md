# MoneyHub - Project Context

> Master Project Documentation

---

# Project Information

| Property | Value |
|----------|--------|
| Project Name | MoneyHub |
| Version | v1.0.0 (MVP) |
| Project Type | Full Stack Web Application |
| Architecture | Layered Architecture |
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | Supabase PostgreSQL |
| ORM | Prisma |
| Deployment | Vercel + Render |
| Status | Active Development |
| Developer | Indranil Das |

---

# Project Overview

MoneyHub is a modern financial web application that allows users to calculate and compare Fixed Deposit (FD) and Recurring Deposit (RD) returns across multiple Indian banks.

Instead of manually visiting different bank websites, users can calculate investment returns and compare maturity amounts through a single platform.

The application is designed using production-level software architecture with complete separation between frontend, backend, business logic, and database.

---

# Problem Statement

Currently, users need to:

- Visit multiple bank websites
- Search for interest rates
- Calculate maturity manually
- Compare results using spreadsheets

This process is repetitive, time-consuming, and prone to calculation errors.

---

# Solution

MoneyHub solves this problem by:

- Maintaining bank interest rates in a centralized database.
- Automatically calculating FD and RD maturity.
- Comparing returns across multiple banks.
- Returning ranked results based on maturity amount.
- Providing a simple and responsive user interface.

---

# Project Goals

The primary goals of MoneyHub are:

- Provide accurate FD calculations
- Provide accurate RD calculations
- Compare returns across banks
- Build production-ready REST APIs
- Demonstrate enterprise-level full stack architecture
- Create a scalable platform for future financial tools

---

# Target Users

MoneyHub is designed for:

### Individual Investors

People comparing FD/RD returns before investing.

### Banking Customers

Users searching for the highest returns.

### Financial Advisors

Professionals comparing investment options for clients.

### Developers

Developers learning React, Express, Prisma, REST APIs, and deployment.

---

# Current Features

## Backend

- Bank Management API
- Interest Rate API
- FD Calculation Engine
- RD Calculation Engine
- Compare Banks API
- Global Error Handling
- Validation Middleware
- Layered Architecture
- Prisma ORM Integration

---

## Frontend

- Responsive Calculator UI
- Bank Dropdown
- Deposit Type Selection
- Customer Type Selection
- Amount Input
- Tenure Input
- Calculator Result Card
- Compare Banks Button
- Comparison Table
- Toast Notifications

---

## Infrastructure

- GitHub Repository
- Render Deployment
- Vercel Deployment
- Supabase PostgreSQL

---

# High Level Architecture

```

React Frontend
│
▼
Axios API Layer
│
▼
Express REST API
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

The project follows a layered architecture where every layer has a single responsibility.

---

# Folder Structure

```

MoneyHub

├── frontend
│ ├── src
│ │ ├── api
│ │ ├── assets
│ │ ├── components
│ │ ├── hooks
│ │ ├── pages
│ │ └── utils
│
├── backend
│ ├── prisma
│ ├── src
│ │ ├── config
│ │ ├── controllers
│ │ ├── middleware
│ │ ├── routes
│ │ ├── services
│ │ └── utils
│
└── docs

```

---

# Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- Prisma ORM

---

## Database

- Supabase PostgreSQL

---

## Deployment

Frontend

- Vercel

Backend

- Render

Database

- Supabase PostgreSQL

---

# Environment Variables

## Frontend

```env
VITE_API_URL=https://moneyhub-zt33.onrender.com/api/v1
```

Purpose:

Base URL for backend API.

---

## Backend

```env
DATABASE_URL=<Supabase Session Pooler URL>
```

Purpose:

Prisma database connection.

> **Important:** Production uses the **Supabase Session Pooler**, not the Direct Connection.

---

# Database Overview

## Bank

Stores:

- Name
- Short Name
- Website
- Logo

---

## InterestRate

Stores:

- Bank
- Deposit Type
- Customer Type
- Min Months
- Max Months
- Interest Rate

Relationship

```

Bank

│

├───────────────┐

│ 1:N

▼

InterestRate

```

---

# APIs

## GET

```
/api/v1/banks
```

Returns all banks.

---

## GET

```
/api/v1/interest-rates
```

Returns all interest rates.

---

## POST

```
/api/v1/calculator
```

Calculates FD/RD returns for a selected bank.

---

## POST

```
/api/v1/calculator/compare
```

Calculates returns for all banks and returns ranked results.

---

# Business Rules

## Fixed Deposit

- User selects one bank.
- Interest rate retrieved from database.
- Compound interest calculated.
- Maturity returned.

---

## Recurring Deposit

- Monthly investment.
- Interest calculated for each installment.
- Final maturity returned.

---

## Compare Banks

- Bank selection not required.
- Calculates returns for every bank.
- Sorts by highest maturity amount.

---

# Validation Rules

- Amount must be greater than zero.
- Months must be greater than zero.
- Deposit Type must be FD or RD.
- Customer Type must be GENERAL or SENIOR.
- Bank is mandatory only for Calculate API.

---

# Request Lifecycle

```

Browser

↓

React Component

↓

Custom Hook

↓

Axios

↓

Express Route

↓

Controller

↓

Service

↓

Prisma

↓

Supabase Database

↓

JSON Response

↓

Frontend UI

```

---

# Deployment

Frontend

- Hosted on Vercel

Backend

- Hosted on Render

Database

- Hosted on Supabase

Production database connectivity uses the **Supabase Session Pooler**.

---

# Major Issues Resolved

## Missing API Export

Issue

calculateReturns was not exported.

Resolution

Added named export in `calculator.api.js`.

---

## Compare Validation

Issue

Compare endpoint required bank.

Resolution

Created separate validation middleware.

---

## Wrong API Base URL

Issue

Frontend requested

```
/banks
```

instead of

```
/api/v1/banks
```

Resolution

Updated `VITE_API_URL`.

---

## Render Database Connection

Issue

Prisma could not connect to Supabase.

Root Cause

Using Direct Connection.

Resolution

Switched to Session Pooler connection string.

---

# Current Status

## Completed

- Backend APIs
- Prisma ORM
- Database
- React Frontend
- API Integration
- Compare Feature
- Production Deployment

---

## In Progress

- UI Improvements
- Better Comparison Layout
- Mobile Responsiveness

---

# Future Roadmap

## High Priority

- UI Redesign
- Bank Logos
- Dashboard
- Responsive Improvements

---

## Medium Priority

- Saved Calculations
- PDF Export
- Excel Export
- User Accounts

---

## Low Priority

- SIP Calculator
- EMI Calculator
- Home Loan Calculator
- Tax Calculator
- AI Financial Advisor

---

# Developer Notes

- Follow layered architecture.
- Keep controllers lightweight.
- Business logic belongs inside services.
- Database operations should only use Prisma.
- Frontend should communicate only through the API layer.
- Production must use Supabase Session Pooler.
- Always include `/api/v1` in `VITE_API_URL`.

---

# Current Version

**Version:** v1.0.0 (MVP)

MoneyHub is currently production deployed and supports FD/RD calculations, bank comparison, and a scalable backend architecture. Future development will focus on UI improvements, additional financial calculators, and user-centric features.
