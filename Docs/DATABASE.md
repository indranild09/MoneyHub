# DATABASE DOCUMENTATION

> MoneyHub Database Guide

---

# Overview

MoneyHub uses **Supabase PostgreSQL** as its relational database and **Prisma ORM** as the database access layer.

Instead of writing raw SQL queries throughout the application, Prisma is used to manage models, relationships, migrations, and database queries.

```
Application

↓

Prisma ORM

↓

Supabase PostgreSQL
```

This architecture keeps database operations clean, type-safe, and maintainable.

---

# Database Technology

| Property | Value |
|----------|-------|
| Database | PostgreSQL |
| Provider | Supabase |
| ORM | Prisma |
| Connection | Session Pooler |
| Environment Variable | DATABASE_URL |

---

# Database Architecture

```
React Frontend

↓

Express Backend

↓

Services

↓

Prisma Client

↓

Supabase PostgreSQL
```

The frontend never communicates directly with the database.

All database operations happen through the backend services.

---

# Current Database Models

Currently MoneyHub contains two primary tables.

```
Bank

│

│ 1 : N

│

InterestRate
```

---

# Bank Table

Stores all supported banks.

## Purpose

Acts as the master table for all bank information.

---

## Fields

| Field | Type | Description |
|--------|------|-------------|
| id | Int | Primary Key |
| name | String | Full bank name |
| shortName | String | Short code (e.g. SBI) |
| website | String | Official website |
| logoUrl | String (Optional) | Bank logo URL |
| createdAt | DateTime | Record creation timestamp |
| updatedAt | DateTime | Last updated timestamp |

---

## Example

```json
{
  "id": 1,
  "name": "State Bank of India",
  "shortName": "SBI",
  "website": "https://www.onlinesbi.com"
}
```

---

# InterestRate Table

Stores FD and RD interest rates for each bank.

## Purpose

Provides dynamic interest rates for calculations.

---

## Fields

| Field | Type | Description |
|--------|------|-------------|
| id | Int | Primary Key |
| bankId | Int | Foreign Key → Bank |
| depositType | String | FD / RD |
| customerType | String | GENERAL / SENIOR |
| minMonths | Int | Minimum tenure |
| maxMonths | Int | Maximum tenure |
| interestRate | Float | Annual interest rate |
| createdAt | DateTime | Record creation timestamp |
| updatedAt | DateTime | Last updated timestamp |

---

## Example

```json
{
  "bankId":1,
  "depositType":"FD",
  "customerType":"GENERAL",
  "minMonths":12,
  "maxMonths":12,
  "interestRate":6.8
}
```

---

# Relationships

```
Bank

id

│

├───────────────┐

│

▼

InterestRate

bankId
```

Relationship

```
One Bank

↓

Many Interest Rates
```

This allows one bank to have multiple FD and RD interest rate records.

---

# Database Flow

## Get Banks

```
Controller

↓

Bank Service

↓

Prisma

↓

Bank Table

↓

Response
```

---

## Calculate FD

```
Calculator Service

↓

Interest Rate Service

↓

InterestRate Table

↓

Matching Interest Rate

↓

Calculation

↓

Response
```

---

## Compare Banks

```
Get Banks

↓

Loop Every Bank

↓

InterestRate Table

↓

Calculation

↓

Sort Results

↓

Response
```

---

# Prisma ORM

Prisma provides:

- Type-safe queries
- Database migrations
- Relationship management
- Model generation
- Automatic SQL generation

Example

```javascript
const banks = await prisma.bank.findMany();
```

---

# Prisma Commands

Generate Prisma Client

```bash
npx prisma generate
```

Run Migrations

```bash
npx prisma migrate dev
```

Create Migration

```bash
npx prisma migrate dev --name migration_name
```

Push Schema

```bash
npx prisma db push
```

Open Database Studio

```bash
npx prisma studio
```

Seed Database

```bash
node prisma/seed.js
```

---

# Seed Data

The project includes a seed script to populate the database with:

- Supported banks
- Interest rates

This simplifies local development and testing.

---

# Environment Variable

```
DATABASE_URL
```

Example

```env
DATABASE_URL=postgresql://...
```

Production uses the **Supabase Session Pooler**.

---

# Database Constraints

## Bank

- `id` must be unique.
- `shortName` should be unique.
- `name` should be unique.

---

## InterestRate

Each record should represent a unique combination of:

- Bank
- Deposit Type
- Customer Type
- Minimum Months
- Maximum Months

This avoids duplicate interest rate entries.

---

# Query Lifecycle

```
Frontend

↓

Backend

↓

Service

↓

Prisma

↓

Database

↓

Prisma

↓

Service

↓

Controller

↓

Frontend
```

---

# Error Handling

Common database-related errors include:

| Error | Cause |
|-------|-------|
| Record Not Found | Missing bank or interest rate |
| Duplicate Record | Unique constraint violation |
| Database Connection Error | Incorrect DATABASE_URL |
| Prisma Initialization Error | Database unreachable |

---

# Production Deployment

Database Provider

```
Supabase PostgreSQL
```

Backend

```
Render
```

Important

Use the **Session Pooler** connection string.

Avoid using the Direct Connection in production deployments.

---

# Future Database Enhancements

Planned tables:

## User

- Profile
- Authentication
- Preferences

---

## SavedCalculation

Store previous calculations.

---

## FavoriteBank

Save frequently used banks.

---

## HistoricalInterestRate

Track historical rate changes.

---

## AuditLog

Store important system events.

---

# Best Practices

- Access the database only through Prisma.
- Do not write business logic in database queries.
- Keep relationships normalized.
- Avoid duplicate interest rate records.
- Use migrations for schema changes.
- Seed development data consistently.

---

# Current Database Status

Completed

- PostgreSQL Database
- Prisma ORM Integration
- Bank Model
- InterestRate Model
- Seed Script
- Database Connectivity
- Production Deployment

---

# Developer Notes

- Always use Prisma Client for database access.
- Never expose the database directly to the frontend.
- Maintain referential integrity between Bank and InterestRate.
- Update seed data when adding new banks or interest rates.
- Use the Supabase Session Pooler for all production deployments.

---

# Summary

MoneyHub uses a clean relational database structure with Prisma ORM to provide reliable, scalable, and maintainable data access. The current schema supports dynamic FD/RD calculations and bank comparisons while remaining extensible for future financial products and user features.