# CHANGELOG

All notable changes to **MoneyHub** will be documented in this file.

This project follows a simplified version of **Keep a Changelog** and **Semantic Versioning**.

---

# [1.0.0] - Initial MVP Release

## Release Date

July 2026

---

# 🎉 Initial Release

MoneyHub MVP is officially deployed and operational.

This release establishes the complete project architecture, backend APIs, frontend integration, database, and production deployment.

---

# Added

## Frontend

- React + Vite application
- Tailwind CSS integration
- Responsive calculator UI
- Bank selection dropdown
- Deposit type selector (FD / RD)
- Customer type selector
- Amount input
- Tenure input
- Calculate button
- Compare All Banks button
- Result card
- Comparison table
- Axios API integration
- React Hot Toast notifications
- Custom React Hook (`useCalculator`)

---

## Backend

- Express server
- Layered Architecture
- REST API structure
- Controller layer
- Service layer
- Middleware layer
- Utility classes
- Prisma ORM integration
- Environment configuration
- Global Error Handler
- Validation Middleware

---

## APIs

Added following REST APIs

### Banks

```
GET /api/v1/banks
```

---

### Interest Rates

```
GET /api/v1/interest-rates
```

---

### Calculator

```
POST /api/v1/calculator
```

---

### Compare Banks

```
POST /api/v1/calculator/compare
```

---

## Database

Added

- Bank model
- InterestRate model
- Prisma schema
- Seed script
- Database migrations

---

## Deployment

Configured

- Render Backend
- Vercel Frontend
- Supabase PostgreSQL

---

## Documentation

Created

- PROJECT_CONTEXT.md
- BACKEND_GUIDE.md
- FRONTEND_GUIDE.md
- API_DOCUMENTATION.md
- DATABASE.md
- DEPLOYMENT.md
- ROADMAP.md
- CHANGELOG.md

---

# Changed

## API Architecture

Adopted a layered backend architecture.

```
Routes

↓

Controllers

↓

Services

↓

Prisma

↓

Database
```

---

## Database Connectivity

Changed production database connection from

```
Supabase Direct Connection
```

to

```
Supabase Session Pooler
```

Reason

Improved compatibility with Render deployment.

---

## Frontend Architecture

Separated

- UI Components
- API Layer
- Hooks

to improve maintainability.

---

# Fixed

## Compare API Validation

Issue

Compare endpoint incorrectly required bank.

Resolution

Created dedicated validation middleware.

---

## Missing API Export

Issue

```
calculateReturns
```

was missing from

```
calculator.api.js
```

Resolution

Added named export.

---

## Duplicate Controller Declaration

Issue

Controller imported twice.

Resolution

Removed duplicate declaration.

---

## API Base URL

Issue

Frontend called

```
/banks
```

instead of

```
/api/v1/banks
```

Resolution

Updated

```
VITE_API_URL
```

to include

```
/api/v1
```

---

## Database Connection

Issue

```
PrismaClientInitializationError
```

Root Cause

Using Supabase Direct Connection.

Resolution

Migrated to Session Pooler.

---

# Security

Added

- Environment variables
- Centralized configuration
- Validation middleware
- Standard error handling

---

# Performance

Improved

- Component reuse
- Layer separation
- API organization
- Prisma query management

---

# Known Issues

Current known limitations

- UI requires further refinement
- Mobile responsiveness can be improved
- Bank logos not yet implemented
- Authentication not implemented
- Historical interest rates unavailable

---

# Upcoming Release

## Version 1.1.0

Planned Features

- Dashboard redesign
- Better UI
- Bank logos
- Mobile optimization
- Improved comparison cards

---

## Version 1.2.0

Planned Features

- SIP Calculator
- EMI Calculator
- Savings Calculator
- PDF Export
- Excel Export

---

## Version 2.0.0

Planned Features

- Authentication
- User Dashboard
- Saved Calculations
- Favourite Banks
- AI Financial Assistant

---

# Contributors

## Developer

**Indranil Das**

---

# Project Status

Current Version

```
v1.0.0
```

Status

```
MVP Complete
Production Deployed
Active Development
```

---

# Notes

MoneyHub has reached its first production-ready milestone.

The core architecture is complete, the application is deployed successfully, and future releases will primarily focus on user experience, additional financial calculators, authentication, and AI-powered financial planning features.