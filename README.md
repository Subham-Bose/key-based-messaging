# 🚀 Key-Based Messaging (Full-Stack Demo)

A practical implementation of a key-based messaging system using a .NET 10 backend and an Angular 21 frontend.

This project demonstrates how to build a loosely coupled, scalable, and i18n-ready notification system where backend and frontend communicate using structured message keys instead of tightly coupled responses.

## 📌 Overview

Traditional APIs return fully formatted messages. This tightly couples backend logic with UI rendering.

This project follows a different approach:

- Backend returns a structured string  
- Frontend resolves it into a user-friendly message  

This ensures:

- Better separation of concerns  
- Easier scalability  
- Cleaner architecture  

## 🧠 Core Idea

### Wire Format
<NAMESPACE>.<EVENT>|<param0>|<param1>|...


### Example
MONEY.TRANSFER_SUCCESS|12500|Priya|87340


### Frontend Processing

- Parse the string  
- Extract:  
  - `messageKey = MONEY.TRANSFER_SUCCESS`  
  - `params = [12500, Priya, 87340]`  
- Lookup template from `en.json`  
- Replace placeholders (`{{0}}, {{1}}, {{2}}`)  
- Render final message  

### Final Output
₹12500 has been sent to Priya. Your new balance is ₹87340.


## 🏗️ Tech Stack

| Layer     | Technology |
|----------|-----------|
| Backend  | .NET 10 (LTS), ASP.NET Core, C# 14 |
| Frontend | Angular 21, TypeScript, Signals (Zoneless) |
| Protocol | Key-based string messaging |
| Transport| HTTP (plain text response) |
| i18n     | JSON templates with {{N}} placeholders |
| Testing  | Vitest |

## ⚙️ How It Works

### End-to-End Flow

1. User triggers an action (e.g., transfer money)  

2. Backend returns:
MONEY.TRANSFER_SUCCESS|12500|Priya|87340


3. Angular receives raw text (`responseType: 'text'`)  

4. Parser splits:  
   - Key → `MONEY.TRANSFER_SUCCESS`  
   - Params → `{0: 12500, 1: Priya, 2: 87340}`  

5. Severity derived from key  

6. Template resolved from `en.json`  

7. Final message rendered in UI  

## 🧩 Architecture

### Backend Responsibilities

- Generate message keys  
- Attach parameters  
- Return plain text response  
- No UI formatting  

### Frontend Responsibilities

- Parse response string  
- Map severity  
- Resolve i18n templates  
- Render final message  

## 📂 Project Structure
backend/
├── Controllers/
├── Interfaces/
├── Implementations/

frontend/
├── models/
├── services/
├── utils/
├── components/
├── assets/i18n/


## 🔑 Wire Format Rules

- Use UPPER_SNAKE_CASE  
- Format: `NAMESPACE.EVENT`  
- Parameters separated by `|`  
- No JSON payloads  
- No trailing pipes  
- Parameter order must not change (breaking change)  

### Examples
LOGIN.LOGIN_SUCCESS|30
MONEY.EMI_DUE|8200|3|05 May
LOGIN.LOGIN_ATTEMPTS_REMAINING|2


## ▶️ Getting Started

### Backend (.NET)

```bash
cd backend
dotnet run
```

API endpoint:
GET ```/api/alert/{choice}```

### Frontend (Angular)
```bash
cd frontend
npm install
ng serve
```

Application runs at:
```http://localhost:4200```
