# FRONTEND GUIDE

> Complete Frontend Documentation for MoneyHub

---

# Overview

The frontend of MoneyHub is built using **React**, **Vite**, and **Tailwind CSS**.

The frontend is responsible for:

- Displaying the user interface
- Collecting user input
- Calling backend APIs
- Displaying calculated results
- Comparing bank returns

The frontend does **not** perform business logic. All financial calculations are handled by the backend.

---

# Technology Stack

| Technology | Purpose |
|------------|---------|
| React | Component-based UI |
| Vite | Development & Build Tool |
| Tailwind CSS | Styling |
| Axios | API Requests |
| React Hot Toast | Notifications |

---

# Folder Structure

```
frontend

├── public/
│
├── src
│
│   ├── api
│   │     axios.js
│   │     bank.api.js
│   │     calculator.api.js
│   │     interestRate.api.js
│   │
│   ├── assets
│   │
│   ├── components
│   │     calculator/
│   │
│   ├── hooks
│   │     useCalculator.js
│   │
│   ├── pages
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── .env
```

---

# Frontend Architecture

```
User

↓

React Component

↓

Custom Hook

↓

API Layer

↓

Axios

↓

Backend API

↓

Response

↓

Component Re-render
```

Every layer has one responsibility.

---

# Entry Point

## main.jsx

Responsibilities

- Render React App
- Load Tailwind
- Initialize React
- Wrap App Component

---

# App.jsx

Responsibilities

- Main Layout
- Global Components
- Page Rendering

Future

- React Router
- Authentication Routes

---

# Components

All UI components are located inside

```
src/components
```

Each component has one responsibility.

---

# Calculator Components

---

## CalculatorCard

Main component.

Responsibilities

- Holds calculator inputs
- Calls API
- Displays Result
- Displays Comparison

Children

- BankDropdown
- DepositTypeToggle
- AmountInput
- TenureInput
- CustomerType
- CalculateButton
- CalculatorResult
- ComparisonTable

---

## BankDropdown

Purpose

Displays available banks.

Flow

```
Load Banks

↓

API Call

↓

Dropdown

↓

User Selects Bank
```

---

## DepositTypeToggle

Allows switching between

- FD
- RD

---

## AmountInput

Collects investment amount.

---

## TenureInput

Collects investment duration in months.

---

## CustomerType

Allows user to choose

- General
- Senior Citizen

---

## CalculateButton

Calls

```
calculate()
```

Shows loading state during API execution.

---

## CalculatorResult

Displays

- Principal
- Interest Earned
- Maturity Amount
- Interest Rate

---

## ComparisonTable

Displays ranked bank comparison.

Shows

- Rank
- Bank
- Interest Rate
- Interest Earned
- Maturity Amount

Sorted by highest maturity.

---

# Hooks

---

## useCalculator

Custom hook responsible for:

- Calling Calculate API
- Calling Compare API
- Managing Loading State
- Managing Result State
- Managing Comparison State

States

```
loading

result

comparison
```

Functions

```
calculate()

compare()

reset()
```

---

# API Layer

Located inside

```
src/api
```

Purpose

Keeps API logic separate from UI.

Components never call Axios directly.

---

## axios.js

Creates Axios instance.

Uses

```
VITE_API_URL
```

Base URL example

```
https://moneyhub-zt33.onrender.com/api/v1
```

---

## bank.api.js

Functions

```
getBanks()
```

---

## calculator.api.js

Functions

```
calculateReturns()

compareReturns()
```

---

## interestRate.api.js

Functions

```
getInterestRates()
```

---

# Data Flow

## Calculate

```
User

↓

CalculatorCard

↓

useCalculator

↓

calculator.api.js

↓

Axios

↓

Backend

↓

Result

↓

CalculatorResult
```

---

## Compare

```
User

↓

Compare Button

↓

useCalculator

↓

compareReturns()

↓

Backend

↓

ComparisonTable
```

---

# Styling

The application uses

Tailwind CSS

Benefits

- Utility Classes
- Responsive Layout
- Fast Development
- Easy Customization

---

# State Management

Current

React Hooks

```
useState

Custom Hooks
```

Future

If application grows

Possible migration

```
Redux Toolkit

or

React Context
```

---

# Environment Variables

```
VITE_API_URL
```

Purpose

Backend API URL.

Must include

```
/api/v1
```

---

# Error Handling

Errors are displayed using

```
React Hot Toast
```

Examples

- Network Error
- Validation Error
- Server Error

---

# Current UI Features

✔ Responsive Calculator

✔ Compare Button

✔ Bank Dropdown

✔ Loading States

✔ Toast Messages

✔ Result Card

✔ Comparison Table

---

# Future UI Improvements

- Professional Dashboard
- Dark Mode
- Bank Logos
- Charts
- Animations
- Better Mobile Layout
- Skeleton Loaders
- Searchable Dropdown
- Theme Support

---

# Best Practices Used

✔ Component Based Architecture

✔ Reusable Components

✔ Custom Hooks

✔ API Layer Separation

✔ Tailwind Utility Classes

✔ Minimal Component Logic

✔ Backend Driven Calculations

---

# Developer Guidelines

1.

Never place API calls directly inside UI components.

Use API Layer.

---

2.

Keep business logic inside

```
useCalculator
```

or backend.

---

3.

Create reusable components.

Avoid duplicated UI.

---

4.

Use Tailwind consistently.

Avoid inline styles.

---

5.

Every new backend endpoint should have

```
API Function

↓

Hook

↓

Component
```

---

# Current Frontend Status

Completed

✔ Calculator

✔ Compare Feature

✔ API Integration

✔ Responsive Form

✔ Result Display

✔ Toast Notifications

✔ Production Deployment

---

In Progress

- UI Refinement
- Better Dashboard
- Enhanced Comparison Design

---

# Future Roadmap

High Priority

- Dashboard UI
- Better Cards
- Bank Logos
- Mobile Improvements

Medium Priority

- Charts
- User Accounts
- Saved Calculations
- Export to PDF

Low Priority

- AI Assistant
- Theme Switcher
- Portfolio Dashboard
- Financial Insights

---

# Summary

The frontend follows a clean React architecture where:

```
UI

↓

Hooks

↓

API Layer

↓

Backend

↓

Database
```

This keeps components simple, reusable, and easy to maintain while allowing the backend to handle all business logic.