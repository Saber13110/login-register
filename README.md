# login-register

This repository contains a simple Angular frontend that implements login and registration forms.

All of the frontend code lives in the `frontend/` directory where two Angular components are provided:

- `LoginComponent` for user authentication
- `RegisterComponent` for account creation

A backend can be implemented with FastAPI and PostgreSQL (not included in this repository).

Legacy standalone HTML files (`login.html` and `register.html`) have been removed in favor of the Angular implementation.

To run the Angular application locally:

```bash
cd frontend
npm install   # requires internet access
npm start
```

This will start the development server on `http://localhost:4200/`.

## License

This project is licensed under the [MIT License](LICENSE).
