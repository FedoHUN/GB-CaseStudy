# GymBeam Case Study - React Developer (2025)

This project was developed as part of the GymBeam Case Study - React Developer . It is a web application built
using React, Next.js, TypeScript, and Tailwind CSS, utilizing the Fake Store API as a backend service for authentication
and product data.

## Features

- User authentication with login and optional registration
- Protected product list and product detail pages accessible only after login
- Responsive design for both desktop and mobile devices
- Filtering of products by name (ascending and descending)
- Clean and maintainable project structure
- Styled with Tailwind CSS using GymBeam branding
- Logo display on the authentication page and private layout

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Fake Store API

## Project Structure

```
gymbeam-case-study/
├── .next/ # Next.js build output
├── node_modules/ # Installed dependencies
├── public/ # Static assets (e.g., logo.png)
├── src/ # Application source code
│ ├── api/ # API utility functions (auth and product)
│ ├── app/ # Next.js app routes and layout
│ ├── components/ # Reusable components (forms, cards, etc.)
│ ├── hooks/ # Custom React hooks (e.g., useAuth)
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/FedoHUN/GB-CaseStudy.git
cd gymbeam-case-study
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## Starting the project

1. Open your browser and navigate to `http://localhost:3000`.

> If the project does not open on port 3000, check your terminal for the correct local address. Next.js may use a different port if 3000 is already in use.


You should see the GymBeam Case Study application running.

## Authentication

You can log in using a predefined test user from the Fake Store API:

```bash
Username: johnd
Password: m38rmF$
```

Or, register a new user via the registration page.

> **Note:** Registration is implemented correctly but currently does not work as expected because the Fake Store API
> does not persist new user data. This is a limitation of the mock backend.

## Author

Developed by Máté Vojtko as part of the GymBeam React Developer - case study.
