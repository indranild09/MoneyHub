# API DOCUMENTATION

> MoneyHub REST API Documentation

Base URL

Production

```
https://moneyhub-zt33.onrender.com/api/v1
```

Development

```
http://localhost:5000/api/v1
```

---

# API Overview

MoneyHub exposes REST APIs for:

- Banks
- Interest Rates
- FD/RD Calculator
- Compare Banks

All APIs return JSON responses.

---

# Standard Response Format

## Success Response

```json
{
    "success": true,
    "message": "Request successful",
    "data": {}
}
```

---

## Error Response

```json
{
    "success": false,
    "message": "Error message"
}
```

---

# Banks API

## Get All Banks

### Endpoint

```
GET /banks
```

### Description

Returns all supported banks.

---

### Request

No request body required.

---

### Success Response

```json
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "State Bank of India",
            "shortName": "SBI",
            "website": "https://www.onlinesbi.com"
        }
    ]
}
```

---

### Status Codes

| Code | Description |
|------|-------------|
|200|Success|
|500|Internal Server Error|

---

# Interest Rate API

## Get All Interest Rates

### Endpoint

```
GET /interest-rates
```

---

### Description

Returns all available FD/RD interest rates.

---

### Success Response

```json
{
    "success": true,
    "data": [
        {
            "bank":"SBI",
            "depositType":"FD",
            "customerType":"GENERAL",
            "interestRate":6.8
        }
    ]
}
```

---

### Status Codes

| Code | Description |
|------|-------------|
|200|Success|
|500|Internal Server Error|

---

# Calculator API

## Calculate FD/RD Returns

### Endpoint

```
POST /calculator
```

---

### Description

Calculates maturity amount for a selected bank.

---

### Request Body

```json
{
    "bank":"SBI",
    "depositType":"FD",
    "customerType":"GENERAL",
    "amount":100000,
    "months":12
}
```

---

### Request Fields

| Field | Type | Required |
|--------|------|----------|
|bank|string|Yes|
|depositType|string|Yes|
|customerType|string|Yes|
|amount|number|Yes|
|months|number|Yes|

---

### Success Response

```json
{
    "success": true,
    "data": {
        "bank":"State Bank of India",
        "depositType":"FD",
        "customerType":"GENERAL",
        "principal":100000,
        "interestRate":6.8,
        "interestEarned":6978.54,
        "maturityAmount":106978.54
    }
}
```

---

### Error Responses

#### Bank Missing

```json
{
    "success": false,
    "message":"Bank is required"
}
```

---

#### Invalid Amount

```json
{
    "success": false,
    "message":"Amount must be greater than 0"
}
```

---

#### Interest Rate Not Found

```json
{
    "success": false,
    "message":"Interest rate not found"
}
```

---

### Status Codes

| Code | Description |
|------|-------------|
|200|Success|
|400|Validation Error|
|404|Data Not Found|
|500|Internal Server Error|

---

# Compare Banks API

## Compare FD/RD Returns

### Endpoint

```
POST /calculator/compare
```

---

### Description

Calculates returns for every available bank and sorts them by highest maturity amount.

---

### Request Body

```json
{
    "depositType":"FD",
    "customerType":"GENERAL",
    "amount":100000,
    "months":12
}
```

---

### Request Fields

| Field | Type | Required |
|--------|------|----------|
|depositType|string|Yes|
|customerType|string|Yes|
|amount|number|Yes|
|months|number|Yes|

> **Note:** `bank` is **not required** for this endpoint.

---

### Success Response

```json
{
    "success": true,
    "data": [
        {
            "bank":"HDFC Bank",
            "shortName":"HDFC",
            "interestRate":7,
            "principal":100000,
            "interestEarned":7250,
            "maturityAmount":107250
        },
        {
            "bank":"SBI",
            "shortName":"SBI",
            "interestRate":6.8,
            "principal":100000,
            "interestEarned":6978,
            "maturityAmount":106978
        }
    ]
}
```

---

### Status Codes

| Code | Description |
|------|-------------|
|200|Success|
|400|Validation Error|
|404|Interest Rates Not Found|
|500|Internal Server Error|

---

# Validation Rules

## Calculator API

Validation includes:

- Bank required
- Deposit Type required
- Customer Type required
- Amount > 0
- Months > 0

---

## Compare API

Validation includes:

- Deposit Type required
- Customer Type required
- Amount > 0
- Months > 0

Bank is intentionally excluded.

---

# Request Lifecycle

```
Client

↓

Axios

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

Database

↓

JSON Response

↓

Frontend
```

---

# Common HTTP Status Codes

| Status | Meaning |
|---------|---------|
|200|Success|
|400|Bad Request|
|404|Data Not Found|
|500|Internal Server Error|

---

# API Versioning

Current Version

```
v1
```

Base URL

```
/api/v1
```

Future versions should use:

```
/api/v2
```

to avoid breaking existing clients.

---

# Authentication

Current Status

No authentication required.

Future Plan

- JWT Authentication
- Refresh Tokens
- Role-Based Access Control (RBAC)

---

# Testing

The APIs can be tested using:

- Postman
- Thunder Client
- Insomnia
- cURL

---

## Example cURL

### Get Banks

```bash
curl -X GET \
https://moneyhub-zt33.onrender.com/api/v1/banks
```

---

### Calculate FD

```bash
curl -X POST \
https://moneyhub-zt33.onrender.com/api/v1/calculator \
-H "Content-Type: application/json" \
-d '{
"bank":"SBI",
"depositType":"FD",
"customerType":"GENERAL",
"amount":100000,
"months":12
}'
```

---

### Compare Banks

```bash
curl -X POST \
https://moneyhub-zt33.onrender.com/api/v1/calculator/compare \
-H "Content-Type: application/json" \
-d '{
"depositType":"FD",
"customerType":"GENERAL",
"amount":100000,
"months":12
}'
```

---

# Future APIs

Planned endpoints:

```
POST /auth/login

POST /auth/signup

GET /users/profile

GET /favorites

POST /favorites

DELETE /favorites

GET /historical-rates

GET /dashboard

GET /reports

GET /calculations/history
```

---

# Summary

Current API Modules:

- Banks API
- Interest Rate API
- Calculator API
- Compare Banks API

The APIs are RESTful, versioned, layered, and designed to support future expansion without breaking existing integrations.