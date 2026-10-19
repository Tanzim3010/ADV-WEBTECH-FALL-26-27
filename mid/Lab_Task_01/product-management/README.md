# Name: Md Tanzimul Islam
# Id: 23-53147-3
# Section: E

# Setup & Run Guide

## Prerequisites & Database Setup
1. Ensure PostgreSQL is installed and running locally.
2. Create a database named: `product_management` for the project.
3. Configure your environment variables in a `.env` file based on `.env.example`.

## 📦 Install Dependencies

```bash
pnpm install````

# 🗄️ Database Migrations

```bash
pnpm run migration:run```


# ▶️ Running the Backend (Development)

Start the NestJS app:

```bash
pnpm start:dev```

# Endpoint list

Products(/products)
 
POST /products - Create and save a product

GET /products - Return all saved products

GET /products/:id - Return a product by ID

PATCH /products/:id - Update a product by ID

DELETE /products/:id - Delete a product by ID

Employees(/employees)

POST /employees - Create and save an employee

GET /employees - Return all saved employees

GET /employees/:id - Return an employee by ID

PATCH /employees/:id - Update an employee by ID

DELETE /employees/:id - Delete an employee by ID
