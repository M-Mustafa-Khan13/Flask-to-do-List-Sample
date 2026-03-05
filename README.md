# Flask To-Do List App

A full-stack web application built with Flask that allows users to register, log in, and manage their personal to-do lists. Each user's tasks are private and only accessible after authentication.

---

## Project Overview

This project is a task management web application designed to demonstrate core full-stack development skills using Python and Flask. It covers user authentication, database relationships, form validation, and dynamic template rendering — all common patterns found in production web applications.

Built as a portfolio project to showcase practical experience with backend web development, database design, and secure user session management.

---

## Features

- **User Registration** — Create a new account with a unique username and password
- **User Login / Logout** — Secure session-based authentication
- **Create Tasks** — Add new tasks to your personal to-do list
- **View Tasks** — See all of your tasks in one place
- **Update Tasks** — Edit task names or mark tasks as completed
- **User Isolation** — Each user can only view and manage their own tasks

---

## Technologies Used

| Category        | Technology                          |
|-----------------|-------------------------------------|
| Language        | Python 3                            |
| Web Framework   | Flask                               |
| Database        | SQLite                              |
| ORM             | SQLAlchemy                          |
| Form Handling   | Flask-WTF                           |
| Templating      | Jinja2                              |
| Frontend        | HTML / CSS                          |

---

## Database Structure

The application uses two models with a one-to-many relationship:

### `User`
| Field        | Type    | Description                        |
|--------------|---------|------------------------------------|
| `id`         | Integer | Primary key                        |
| `username`   | String  | Unique username                    |
| `password`   | String  | Hashed password                    |

### `Task`
| Field          | Type    | Description                          |
|----------------|---------|--------------------------------------|
| `id`           | Integer | Primary key                          |
| `name`         | String  | Task description                     |
| `completed`    | Boolean | Completion status (default: False)   |
| `user_id`      | Integer | Foreign key referencing `User.id`    |

**Relationship:** One `User` can have many `Task` records. Each task belongs to exactly one user.

---

## Installation

### Prerequisites

- Python 3.8 or higher
- `pip` package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/flask-todo-app.git
   cd flask-todo-app
   ```

2. **Create and activate a virtual environment**

   ```bash
   python -m venv venv

   # On Windows
   venv\Scripts\activate

   # On macOS / Linux
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**

   Create a `.env` file in the project root (or set these in your shell):

   ```
   SECRET_KEY=your-secret-key-here
   ```

5. **Initialize the database**

   ```bash
   flask shell
   >>> from app import db
   >>> db.create_all()
   >>> exit()
   ```

---

## How to Run the App

```bash
flask run
```

Then open your browser and navigate to:

```
http://127.0.0.1:5000
```

---

## Project Structure

```
flask-todo-app/
├── app.py                  # Application factory and routes
├── models.py               # SQLAlchemy database models
├── forms.py                # Flask-WTF form definitions
├── templates/
│   ├── base.html           # Base layout template
│   ├── login.html          # Login page
│   ├── register.html       # Registration page
│   └── tasks.html          # Task list page
├── static/
│   └── style.css           # Application styles
├── requirements.txt        # Python dependencies
└── README.md
```

---

## Screenshots

> Screenshots will be added here once the UI is finalized.

| Page             | Preview              |
|------------------|----------------------|
| Login Page       | *(coming soon)*      |
| Register Page    | *(coming soon)*      |
| Task Dashboard   | *(coming soon)*      |

---

## Future Improvements

- [ ] Add task due dates and priority levels
- [ ] Implement task categories or tags
- [ ] Add a search and filter bar for tasks
- [ ] Migrate from SQLite to PostgreSQL for production use
- [ ] Deploy to a cloud platform (e.g., Render, Railway, or Heroku)
- [ ] Add password reset via email (Flask-Mail)
- [ ] Write unit and integration tests (pytest)
- [ ] Improve UI with a CSS framework (e.g., Bootstrap or Tailwind CSS)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
