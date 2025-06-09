# login-register

This repository contains a simple Angular frontend with login and register pages.

The frontend code is located in the `frontend/` directory. It provides two Angular components:


- `LoginComponent` for user authentication
- `RegisterComponent` for account creation

Both components use an `AuthService` that sends requests to a FastAPI backend.

## Backend requirements

The expected backend runs [FastAPI](https://fastapi.tiangolo.com/) with a PostgreSQL database.
Set a `DATABASE_URL` environment variable, for example:

```bash
export DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mydb
```

Install the dependencies and start the API:

```bash
pip install fastapi[all] psycopg2-binary
uvicorn main:app --reload
```

The frontend `AuthService` assumes the API is available at `http://localhost:8000`.

To run the Angular application locally:

```bash
cd frontend
npm install   # requires internet access
npm start
```

This will start the development server on `http://localhost:4200/`.
