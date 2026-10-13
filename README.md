# Interview Practice Tracker

## 1. Project Overview

The Interview Practice Tracker is a React-based web application that helps developers organize their interview preparation. Users can manage questions, track their practice status, and monitor their progress through a dashboard.

## 2. Features

- **Dashboard:** Displays total questions and preparation progress.
- **CRUD Operations:** Add, view, edit, and delete interview questions.
- **Categories:** Organize questions into DSA, Git, Technical, and Machine Coding.
- **Difficulty Levels:** Classify questions as Easy, Medium, or Hard.
- **Status Tracking:** Track questions as Pending, In Progress, or Completed.
- **Search and Filters:** Find questions using keywords, category, status, and difficulty.
- **Progress Tracking:** Calculate the percentage of completed questions.
- **Form Validation:** Validate user input using React Hook Form.
- **LocalStorage:** Save data in the browser so it remains available after refreshing the page.
- **Responsive Design:** Provide a user-friendly interface on different screen sizes.

## 3. Technology Stack

- **React:** Builds the user interface using reusable components.
- **Redux Toolkit:** Manages shared application state, including questions and filters.
- **React Hook Form:** Handles form inputs, validation, and submission.
- **Tailwind CSS:** Styles the application and creates responsive layouts.
- **JavaScript:** Implements application functionality and interactions.
- **LocalStorage:** Persists question data in the browser.
- **Vite:** Provides the development server and production build tools.

## 4. Four-Layer Architecture

The application separates responsibilities into four layers to make the code easier to understand and maintain.

1. **Presentation Layer:** Displays the dashboard, forms, filters, and question cards using React components.
2. **State Management Layer:** Uses Redux Toolkit to store questions and manage application state.
3. **Business Logic Layer:** Handles question filtering, completion calculations, and dashboard statistics.
4. **Data Persistence Layer:** Uses LocalStorage to save and retrieve question data.

## 5. Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Dashboard.jsx
│   ├── FilterBar.jsx
│   ├── InterviewCard.jsx
│   ├── InterviewForm.jsx
│   └── EditInterviewForm.jsx
├── features/
│   └── tracker/
│       └── trackerSlice.js
├── app/
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css
```

- **components/:** Contains reusable UI components.
- **features/tracker/:** Contains Redux logic for managing interview questions.
- **app/store.js:** Configures the Redux store.
- **App.jsx:** Defines the main application component.
- **main.jsx:** Initializes the React application.
- **index.css:** Contains global styles and Tailwind CSS configuration.

## 6. Installation and Setup

First, clone the repository:

```bash
git clone <your-repository-url>
cd interview-practice-tracker
```

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to use the application.

## 7. How the Application Works

1. Users add interview questions through a form.
2. React Hook Form validates the input.
3. Redux Toolkit manages the question data and updates the application state.
4. Users search, filter, edit, or delete questions.
5. The dashboard calculates and displays preparation progress.
6. LocalStorage saves the data so it can be restored after a page refresh.

## 8. Learning Outcomes

This project demonstrates practical experience with React components, Redux Toolkit, form validation, CRUD operations, search and filtering, LocalStorage, responsive design, and layered application architecture.

## 9. Future Improvements

- Backend and database integration.
- User authentication.
- Cloud data synchronization.
- Progress charts and analytics.

## 10. Author

**Amit Kumar Sharma**
