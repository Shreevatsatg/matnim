# Matnim

Matnim is a full-stack web application that allows users to create and share animations.

## Tech Stack

**Client:**

*   **Framework:** React
*   **Bundler:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **HTTP Requests:** Axios
*   **Linting:** ESLint

**Server:**

*   **Framework:** Express
*   **Database:** MongoDB (with Mongoose)
*   **Authentication:** JWT, bcryptjs
*   **API:** Supabase, ImageKit, OpenAI
*   **Logging:** Winston, Morgan
*   **CORS:** cors middleware
*   **Dev tools:** Nodemon

## Project Structure

The project is divided into two main directories: `client` and `server`.

*   **`client`:** Contains the frontend React application.
*   **`server`:** Contains the backend Express application.

### Client

The `client` directory has the following structure:

```
client/
├── src/
│   ├── components/      # Reusable components
│   ├── context/         # React context providers
│   ├── layouts/         # Layout components (e.g., Navbar, Footer)
│   ├── pages/           # Application pages
│   └── services/        # Services for making API calls
├── public/              # Public assets
└── tailwind.config.js # Tailwind CSS configuration
```

### Server

The `server` directory has the following structure:

```
server/
├── middlwars/       # Express middleware
├── models/          # Mongoose models
├── routes/          # Express routes
├── services/        # Business logic and services
└── utils/           # Utility functions
```

## Getting Started

To get the project up and running, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shreevatsatg/matnim-server.git
    ```

2.  **Install dependencies:**

    ```bash
    # Install client dependencies
    cd client
    npm install

    # Install server dependencies
    cd ../server
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in both the `client` and `server` directories and add the necessary environment variables.

4.  **Start the development servers:**

    ```bash
    # Start the client development server
    cd client
    npm run dev

    # Start the server development server
    cd ../server
    npm run dev
    ```

## Frontend

The frontend is a React application that uses React Router for routing. The application has the following pages:

*   **Home:** The landing page of the application.
*   **Gallery:** A gallery of animations created by users. This is a protected route.
*   **About:** A page with information about the project.
*   **Pricing:** A page with pricing information.
*   **Register:** A page for users to create a new account.
*   **Login:** A page for users to log in to their account.
*   **Forgot Password:** A page for users to reset their password.

The frontend uses an `AuthProvider` to manage authentication state. The `PrivateRoute` component is used to protect routes that require authentication.

## Backend

The backend is an Express application that uses MongoDB as the database. The application has the following API endpoints:

*   **`POST /user/signup`:** Create a new user account.
*   **`POST /user/login`:** Log in to a user account.
*   **`GET /api/me`:** Get the currently logged-in user's information.
*   **`GET /api/logout`:** Log out the currently logged-in user.
*   **`GET /api/animation`:** Get a list of animations.
*   **`GET /api/demo-videos`:** Get a list of demo videos. This is a protected route.

The backend uses JWT for authentication. The `restricttologedinusersonly` middleware is used to protect routes that require authentication.

## Authentication

The application uses JWT for authentication. When a user logs in, a JWT is generated and stored in a cookie. The JWT is then sent with each subsequent request to the server. The server uses the JWT to identify the user and authorize access to protected routes.