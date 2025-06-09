# login-register

This repository contains a simple Angular frontend that implements login and registration forms.

All of the frontend code lives in the `frontend/` directory where two Angular components are provided:

- `LoginComponent` for user authentication
- `RegisterComponent` for account creation

A backend can be implemented with FastAPI and PostgreSQL (not included in this repository).


To run the Angular application locally:

```bash
cd frontend
npm install   # requires internet access
npm start
```

This will start the development server on `http://localhost:4200/`.

## FastAPI backend

The frontend expects a REST API that exposes `/login` and `/register` endpoints.
Below is an outline for creating such a backend using FastAPI and PostgreSQL.

### Dependencies

* Python 3.11 or newer
* `fastapi`
* `uvicorn[standard]`
* `sqlalchemy`
* `psycopg2-binary` (or another PostgreSQL driver)
* `alembic` for migrations

Install them with:

```bash
pip install fastapi uvicorn[standard] sqlalchemy psycopg2-binary alembic
```

### Example configuration

Set a `DATABASE_URL` environment variable to point at your database, e.g.:

```bash
export DATABASE_URL="postgresql+psycopg2://user:password@localhost/dbname"
```

### Database migrations

Use Alembic to manage schema migrations:

```bash
alembic init alembic       # run once to create migration directory
alembic revision --autogenerate -m "Initial migration"
alembic upgrade head
```

Run the application with:

```bash
uvicorn main:app --reload
```

The API should be accessible at `http://localhost:3000/api` so that the Angular
frontend can communicate with it.

### Angular integration

The Angular app uses `AuthService` located in `frontend/src/app/auth.service.ts`
to send HTTP requests. The base URL for these requests comes from
`frontend/src/environments/environment.ts`:

```ts
export const environment = {
  apiUrl: 'http://localhost:3000/api'
};
```

`AuthService` sends `POST` requests to `${apiUrl}/login` and
`${apiUrl}/register` when users interact with the login or register forms.


## License

This project is licensed under the [MIT License](LICENSE).
