React Quiz
A dynamic and interactive quiz application built using React. This application serves multiple-choice questions, allows users to track their score in real-time, and race against the clock to complete the quiz.

Features
Dynamic Question Fetching: Questions are retrieved from a local server, ensuring flexibility in quiz content.

Countdown Timer: You're on the clock! The application presents a 10-minute timer to challenge users to complete the quiz in the allotted time.

Dynamic Scoring: The application calculates scores based on the user's selections. Users can track their score in real-time.

High Score Tracking: The application saves and displays the user's high score using local storage, promoting repeated attempts to surpass their personal best.

Interactive UI: User experience is prioritized with loading screens during data fetching, error screens for fetch failures, an initial start screen, and a result screen to display the final score.

State Management: Uses the useReducer React hook for managing the state, making state transitions predictable and maintainable.

Structure
... [Rest of the structure as previously provided]

Setup and Installation
Setup:

Clone this repository
Navigate to the project directory: cd react-quiz.
Install the required dependencies: npm install.
Run the Fake API Server:

Run the command: npm run server.
This starts the JSON server and serves the questions.json from the data folder on http://localhost:3001.
Run the React Application:

Start the development server: npm start.
Open a browser and navigate to http://localhost:3000 to start the quiz.
Technologies Used
... [As previously provided]

Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change. Always ensure to update tests as appropriate.