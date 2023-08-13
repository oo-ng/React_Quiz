# React Quiz

A dynamic and interactive quiz application built using React. This application serves multiple-choice questions, allows users to track their score in real-time, and race against the clock to complete the quiz. 

## Features

- **Dynamic Question Fetching**: Questions are retrieved from a local server, ensuring flexibility in quiz content.
  
- **Countdown Timer**: You're on the clock! The application presents a 10-minute timer to challenge users to complete the quiz in the allotted time.
  
- **Dynamic Scoring**: The application calculates scores based on the user's selections. Users can track their score in real-time.

- **High Score Tracking**: The application saves and displays the user's high score using local storage, promoting repeated attempts to surpass their personal best.
  
- **Interactive UI**: User experience is prioritized with loading screens during data fetching, error screens for fetch failures, an initial start screen, and a result screen to display the final score.

- **State Management**: Uses the `useReducer` React hook for managing the state, making state transitions predictable and maintainable.

## Structure

The application's components are organized as follows:

- **Header**: Displays the header of the application.
  
- **Main**: The main content container which conditionally renders components based on the application's status (loading, error, ready, start, finished).
  
- **Loader**: Provides visual feedback during data fetching.
  
- **Error**: Informs users of any errors during data fetching.
  
- **StartScreen**: An introduction screen to start the quiz.
  
- **Questions**: Displays the current question, options, and allows users to select an answer.
  
- **Result**: Displays the final score after completing the quiz and compares it with the user's high score.

## Setup and Installation

1. Clone this repository: `git clone [repository_link]`.
2. Navigate to the project directory: `cd react-quiz`.
3. Install the required dependencies: `npm install`.
4. Start the development server: `npm start`.
5. Open a browser and navigate to `http://localhost:3000` to start the quiz.

## Technologies Used

- **React**: For building the interactive UI.
- **React Hooks**: Including `useReducer`, `useEffect`, and more for state management and side effects.
- **CSS**: For styling and layout.
- **LocalStorage**: To persistently store and retrieve high scores.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change. Always ensure to update tests as appropriate.