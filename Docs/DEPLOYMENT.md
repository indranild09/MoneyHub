# DEPLOYMENT GUIDE

> Complete Setup & Deployment Guide for MoneyHub

---

# Overview

MoneyHub consists of three separate services.

```
Frontend
      │
      ▼
Vercel

Backend
      │
      ▼
Render

Database
      │
      ▼
Supabase PostgreSQL
```

Each service is deployed independently.

---

# Prerequisites

Install the following software:

- Node.js (v20+ Recommended)
- Git
- VS Code
- PostgreSQL (optional for local)
- npm

Accounts required:

- GitHub
- Render
- Vercel
- Supabase

---

# Clone Repository

```bash
git clone https://github.com/<username>/MoneyHub.git

cd MoneyHub
```

---

# Project Structure

```
MoneyHub

frontend/

backend/
```

---

# Backend Setup

Move into backend.

```bash
cd backend
```

Install packages.

```bash
npm install
```

Create

```
.env
```

Add

```env
DATABASE_URL=YOUR_SUPABASE_SESSION_POOLER_URL
PORT=5000
```

Generate Prisma Client.

```bash
npx prisma generate
```

Push schema.

```bash
npx prisma db push
```

Seed database.

```bash
node prisma/seed.js
```

Run backend.

```bash
npm run dev
```

Backend

```
http://localhost:5000
```

---

# Frontend Setup

Move into frontend.

```bash
cd frontend
```

Install packages.

```bash
npm install
```

Create

```
.env
```

Add

```env
VITE_API_URL=http://localhost:5000/api/v1
```

Run frontend.

```bash
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# Local Development Flow

```
React

↓

Axios

↓

Express

↓

Prisma

↓

Supabase
```

---

# Supabase Setup

Create project.

↓

Open

```
Settings

↓

Database
```

Copy

```
Session Pooler URI
```

NOT

```
Direct Connection
```

---

# Why Session Pooler?

During deployment we discovered that

Render

↓

could NOT connect using

```
Direct Connection
```

The issue was fixed by switching to

```
Session Pooler
```

Always use Session Pooler in production.

---

# Prisma Commands

Generate Client

```bash
npx prisma generate
```

Database Push

```bash
npx prisma db push
```

Migration

```bash
npx prisma migrate dev
```

Studio

```bash
npx prisma studio
```

Seed

```bash
node prisma/seed.js
```

---

# Backend Deployment (Render)

Create

New Web Service.

Connect GitHub repository.

Root Directory

```
backend
```

Build Command

```bash
npm install
```

Start Command

```bash
npm start
```

Environment Variables

```env
DATABASE_URL=<Session Pooler URI>
```

Deploy.

Backend URL example

```
https://moneyhub-zt33.onrender.com
```

---

# Frontend Deployment (Vercel)

Import GitHub Repository.

Root Directory

```
frontend
```

Framework

```
Vite
```

Environment Variable

```env
VITE_API_URL=https://moneyhub-zt33.onrender.com/api/v1
```

Deploy.

Frontend example

```
https://money-hub-sand.vercel.app
```

---

# Deployment Checklist

Backend

✔ DATABASE_URL configured

✔ Prisma generated

✔ Database seeded

✔ Render deployed

Frontend

✔ API URL configured

✔ Vercel deployed

Database

✔ Session Pooler

✔ Tables created

✔ Seed completed

---

# API Verification

Open browser

```
https://moneyhub-zt33.onrender.com/api/v1/banks
```

Expected

```json
{
  "success": true,
  "data": [...]
}
```

---

# Common Problems

## 404

Cause

Wrong API URL

Wrong

```
https://server.com/banks
```

Correct

```
https://server.com/api/v1/banks
```

---

## 500

Cause

Database connection failed.

Solution

Check

```
DATABASE_URL
```

Use

```
Session Pooler
```

---

## PrismaClientInitializationError

Cause

Using

```
Direct Connection
```

Solution

Switch to

```
Session Pooler
```

---

## Missing Export

Cause

API function not exported.

Solution

Export function from API module.

---

## Axios Network Error

Check

```
VITE_API_URL
```

Backend should be running.

---

# Updating Backend

```bash
git add .

git commit -m "Update backend"

git push
```

Render redeploys automatically.

---

# Updating Frontend

```bash
git add .

git commit -m "Update frontend"

git push
```

Vercel redeploys automatically.

---

# Production Architecture

```
User

↓

Vercel

↓

Axios

↓

Render

↓

Express

↓

Prisma

↓

Supabase PostgreSQL
```

---

# Security Notes

Never commit

```
.env
```

Never expose

```
DATABASE_URL
```

Use environment variables for secrets.

Keep API URLs configurable.

---

# Backup Strategy

Regularly backup:

- Database
- Prisma schema
- Seed file
- Environment variables

Store backups securely.

---

# Future Improvements

- Docker support
- CI/CD with GitHub Actions
- Automated testing before deployment
- Health check endpoint
- Monitoring and logging
- SSL verification
- Database backups

---

# Deployment Status

Current Production

Frontend

✅ Vercel

Backend

✅ Render

Database

✅ Supabase PostgreSQL

Connectivity

✅ Session Pooler

---

# Quick Start

Backend

```bash
cd backend

npm install

npm run dev
```

Frontend

```bash
cd frontend

npm install

npm run dev
```

Open

```
http://localhost:5173
```

---

# Developer Notes

- Always deploy backend before frontend if API changes.
- Keep frontend and backend environment variables synchronized.
- Verify `/api/v1/banks` after every deployment.
- If database connectivity fails on Render, confirm that the **Session Pooler** connection string is being used.
- Test APIs with Postman or Thunder Client before verifying the frontend.

---

# Summary

MoneyHub uses a modern cloud deployment architecture:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** Supabase PostgreSQL
- **ORM:** Prisma
- **Production Database Connection:** Session Pooler

Following this guide allows a developer to clone the repository, run the application locally, deploy it, and troubleshoot the most common issues encountered during development.