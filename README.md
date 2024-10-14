# Product Feedback

## Description

**Product Feedback** is a web application that allows users to review products and provide recommendations. The platform is designed to help users share their opinions on products and receive feedback from others in a user-friendly environment.

## Features

- Feedback Management (View, Create, Update)

## Monorepo Structure

This repository is structured as a monorepo, containing both the frontend and backend codebases:

- **Frontend**: Built with Angular 17, NgRx for state management, and styled using TailwindCSS.
- **Backend**: Built with Node.js (Express.js) and uses PostgreSQL as the database.

## Tech Stack

### Frontend

- **Framework**: Angular
- **State Management**: NgRx
- **Styling**: TailwindCSS

### Backend

- **Framework**: Node.js (Express.js)
- **Database**: PostgreSQL

## Getting Started

### Prerequisites

- Node.js
- NPM
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/prince-t-asamoah/product-feedback-app.git

2. Navigate into the project directory:

    ```bash
    cd product-feedback-app

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend

2. Install dependencies:

    ```bash
    npm install

3. Run the development server:

    ```bash
    npm start

4. Open your browser and navigate to <http://localhost>:<your_preferred_port>.

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd backend

2. Install dependencies:

    ```bash
    npm install

3. Set up the environment variables:

    Create a ``.env`` file in the ``backend`` directory with the following details:

    ```env
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB_NAME=your_database_name
    PORT=your_preferred_port

4. Run the server:

    ```bash
    npm start

5. The backend server will be available at <http://localhost>:<your_preferred_port>.
