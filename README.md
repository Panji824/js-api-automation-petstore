# 🚀 API Automation Testing with JavaScript (Mocha + Chai + Supertest)

This repository contains an API automation testing project built using **Mocha**, **Chai**, **Supertest**, and **JSON Schema Validation**. The goal of this project is to test not only **status codes**, but also **data integrity**, **contract stability**, and **end-to-end lifecycle consistency**.

---



Most beginners stop at validating `expect(200)`—but real Quality Assurance requires testing **everything behind the response**: structure, required fields, unexpected properties, and the entire data lifecycle.

This project showcases:

### ✅ 1. Full Dynamic E2E Flow

Simulating a complete **CRUD (Create, Read, Update, Delete)** flow in a single session. Even when using the static Petstore API, the script is designed to behave like a real user journey:

* Create a new resource dynamically
* Store and reuse IDs
* Validate the resource via GET
* Update and revalidate changes
* Delete the resource and confirm cleanup

### ✅ 2. Contract Validation with JSON Schema

Every response is validated using JSON Schema to verify:

* Correct data types
* Required fields
* No extra sensitive fields (e.g., password)
* Data consistency across API operations

This helps catch structural bugs that traditional assertions often miss.

---

## 🧪 Tech Stack

| Category              | Tools                         |
| --------------------- | ----------------------------- |
| **Test Runner**       | Mocha (+ Mochawesome Reports) |
| **Assertions**        | Chai (BDD Expect)             |
| **HTTP Client**       | Supertest                     |
| **Schema Validation** | jsonschema                    |
| **Reporting**         | Mochawesome HTML reports      |

---

## 📁 Project Structure

```
├── test/
│   ├── schemas/
│   │   └── ...
│   ├── specs/petstore
│   │   └──...  
├── mochawesome-report/
├── package.json
├── README.md
```

---

## ▶️ Getting Started

### 1. Clone the Repository

```
git clone <your-repository-url>
cd <your-folder>
```

### 2. Install Dependencies

```
npm install
```

### 3. Run Tests

```
npm test
```

### 4. Generate Mochawesome Report

```
npm run report
```

Report will be available at:

```
./mochawesome-report/mochawesome.html
```

---


## 📊 Reporting

This project uses **Mochawesome**, producing:

* Clean HTML reports
* Test summaries
* Failure stack traces
* Execution timeline

Run:

```
npm run report
```

---


## 📬 Contact

For inquiries or collaboration:


* LinkedIn: linkedin.com/in/panji-wirya-pastika



