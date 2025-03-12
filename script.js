// // Quiz Questions
// // AI-Based Quiz Questions
// const questions = [
//     {
//         question: "What does AI stand for?",
//         options: ["Artificial Intelligence", "Automated Inference", "Advanced Internet"],
//         answer: "Artificial Intelligence"
//     },
//     {
//         question: "Which of the following is a subset of AI?",
//         options: ["Machine Learning", "Web Development", "Graphic Design"],
//         answer: "Machine Learning"
//     },
//     {
//         question: "What is the primary goal of AI?",
//         options: ["To mimic human intelligence", "To replace humans", "To create robots"],
//         answer: "To mimic human intelligence"
//     },
//     {
//         question: "Which programming language is most commonly used in AI?",
//         options: ["Python", "Java", "C++"],
//         answer: "Python"
//     },
//     {
//         question: "What is a neural network?",
//         options: ["A system modeled after the human brain", "A type of database", "A programming language"],
//         answer: "A system modeled after the human brain"
//     },
//     {
//         question: "What is the Turing Test used for?",
//         options: ["To evaluate a machine's ability to exhibit intelligent behavior", "To test computer speed", "To measure internet bandwidth"],
//         answer: "To evaluate a machine's ability to exhibit intelligent behavior"
//     },
//     {
//         question: "What is supervised learning?",
//         options: ["A type of machine learning where the model is trained on labeled data", "A type of unsupervised learning", "A type of reinforcement learning"],
//         answer: "A type of machine learning where the model is trained on labeled data"
//     },
//     {
//         question: "What is unsupervised learning?",
//         options: ["A type of machine learning where the model finds patterns in unlabeled data", "A type of supervised learning", "A type of reinforcement learning"],
//         answer: "A type of machine learning where the model finds patterns in unlabeled data"
//     },
//     {
//         question: "What is reinforcement learning?",
//         options: ["A type of machine learning where the model learns by trial and error", "A type of supervised learning", "A type of unsupervised learning"],
//         answer: "A type of machine learning where the model learns by trial and error"
//     },
//     {
//         question: "What is a chatbot?",
//         options: ["An AI program designed to simulate conversation with humans", "A type of robot", "A programming language"],
//         answer: "An AI program designed to simulate conversation with humans"
//     },
//     {
//         question: "What is natural language processing (NLP)?",
//         options: ["A field of AI focused on the interaction between computers and human language", "A type of neural network", "A programming language"],
//         answer: "A field of AI focused on the interaction between computers and human language"
//     },
//     {
//         question: "What is computer vision?",
//         options: ["A field of AI focused on enabling computers to interpret visual data", "A type of database", "A programming language"],
//         answer: "A field of AI focused on enabling computers to interpret visual data"
//     },
//     {
//         question: "What is deep learning?",
//         options: ["A subset of machine learning using neural networks with many layers", "A type of database", "A programming language"],
//         answer: "A subset of machine learning using neural networks with many layers"
//     },
//     {
//         question: "What is a convolutional neural network (CNN)?",
//         options: ["A type of neural network used for image processing", "A type of database", "A programming language"],
//         answer: "A type of neural network used for image processing"
//     },
//     {
//         question: "What is a generative adversarial network (GAN)?",
//         options: ["A type of neural network used to generate new data", "A type of database", "A programming language"],
//         answer: "A type of neural network used to generate new data"
//     },
//     {
//         question: "What is overfitting in machine learning?",
//         options: ["When a model performs well on training data but poorly on new data", "When a model is too simple", "When a model is too fast"],
//         answer: "When a model performs well on training data but poorly on new data"
//     },
//     {
//         question: "What is underfitting in machine learning?",
//         options: ["When a model is too simple to capture patterns in the data", "When a model is too complex", "When a model is too slow"],
//         answer: "When a model is too simple to capture patterns in the data"
//     },
//     {
//         question: "What is a decision tree?",
//         options: ["A model used for decision-making based on a tree-like structure", "A type of database", "A programming language"],
//         answer: "A model used for decision-making based on a tree-like structure"
//     },
//     {
//         question: "What is a random forest?",
//         options: ["An ensemble learning method using multiple decision trees", "A type of database", "A programming language"],
//         answer: "An ensemble learning method using multiple decision trees"
//     },
//     {
//         question: "What is a support vector machine (SVM)?",
//         options: ["A supervised learning model used for classification and regression", "A type of database", "A programming language"],
//         answer: "A supervised learning model used for classification and regression"
//     },
//     {
//         question: "What is a k-nearest neighbors (KNN) algorithm?",
//         options: ["A simple, instance-based learning algorithm", "A type of database", "A programming language"],
//         answer: "A simple, instance-based learning algorithm"
//     },
//     {
//         question: "What is clustering in machine learning?",
//         options: ["Grouping similar data points together", "A type of database", "A programming language"],
//         answer: "Grouping similar data points together"
//     },
//     {
//         question: "What is dimensionality reduction?",
//         options: ["Reducing the number of features in a dataset", "A type of database", "A programming language"],
//         answer: "Reducing the number of features in a dataset"
//     },
//     {
//         question: "What is principal component analysis (PCA)?",
//         options: ["A technique for dimensionality reduction", "A type of database", "A programming language"],
//         answer: "A technique for dimensionality reduction"
//     },
//     {
//         question: "What is a loss function?",
//         options: ["A function that measures how well a model performs", "A type of database", "A programming language"],
//         answer: "A function that measures how well a model performs"
//     },
//     {
//         question: "What is gradient descent?",
//         options: ["An optimization algorithm used to minimize the loss function", "A type of database", "A programming language"],
//         answer: "An optimization algorithm used to minimize the loss function"
//     },
//     {
//         question: "What is backpropagation?",
//         options: ["A method for training neural networks", "A type of database", "A programming language"],
//         answer: "A method for training neural networks"
//     },
//     {
//         question: "What is a hyperparameter?",
//         options: ["A parameter set before training a model", "A type of database", "A programming language"],
//         answer: "A parameter set before training a model"
//     },
//     {
//         question: "What is transfer learning?",
//         options: ["Using a pre-trained model for a new task", "A type of database", "A programming language"],
//         answer: "Using a pre-trained model for a new task"
//     },
//     {
//         question: "What is the difference between AI and machine learning?",
//         options: ["AI is a broader concept, while machine learning is a subset of AI", "They are the same", "Machine learning is broader than AI"],
//         answer: "AI is a broader concept, while machine learning is a subset of AI"
//     }
// ];

// let currentQuestionIndex = 0;
// let score = 0;
// let timeLeft = 600; // 10 minutes in seconds
// let timerInterval;

// // DOM Elements
// const questionContainer = document.getElementById('question-container');
// const timerDisplay = document.getElementById('timer');
// const submitBtn = document.getElementById('submit-btn');
// const progressBar = document.getElementById('progress');

// // Function to display the current question
// function displayQuestion() {
//     const question = questions[currentQuestionIndex];
//     questionContainer.innerHTML = `
//         <h3>Question ${currentQuestionIndex + 1} of ${questions.length}</h3>
//         <p class="question-text">${question.question}</p>
//         ${question.options.map(option => `
//             <label>
//                 <input type="radio" name="answer" value="${option}">
//                 ${option}
//             </label>
//         `).join('')}
//     `;
//     updateProgressBar();
// }

// // Function to update the progress bar
// function updateProgressBar() {
//     const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
//     progressBar.style.width = `${progress}%`;
// }

// // Function to format time
// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
// }

// // Function to start the timer
// function startTimer() {
//     timerInterval = setInterval(() => {
//         timeLeft--;
//         timerDisplay.textContent = `Time Left: ${formatTime(timeLeft)}`;

//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             endQuiz();
//         }
//     }, 1000);
// }

// // Function to end the quiz
// async function endQuiz() {
//     clearInterval(timerInterval);
//     const timeSpent = formatTime(600 - timeLeft);
    
//     try {
//         // Save result to Firebase
//         await addDoc(collection(db, "quiz-results"), {
//             score: score,
//             totalQuestions: questions.length,
//             timeSpent: timeSpent,
//             timestamp: serverTimestamp()
//         });
//         alert(`Quiz Over!\nYour score: ${score}/${questions.length}\nTime spent: ${timeSpent}`);
//         window.location.href = "results.html";
//     } catch (error) {
//         console.error("Error saving results: ", error);
//         alert(`Quiz Over!\nYour score: ${score}/${questions.length}\nTime spent: ${timeSpent}`);
//         window.location.href = "results.html";
//     }
// }

// // Event listener for the submit button
// submitBtn.addEventListener('click', () => {
//     const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
//     if (!selectedAnswer) {
//         alert("Please select an answer!");
//         return;
//     }

//     if (selectedAnswer.value === questions[currentQuestionIndex].answer) {
//         score++;
//     }

//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length) {
//         displayQuestion();
//     } else {
//         endQuiz();
//     }
// });

// // Initialize the quiz
// displayQuestion();
// startTimer();

// Import socket.io client
import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

// Initialize socket connection
const socket = io('http://localhost:5000');

// Quiz Questions
const questions = [
    {
        question: "What does AI stand for?",
        options: ["Artificial Intelligence", "Automated Inference", "Advanced Internet"],
        answer: "Artificial Intelligence"
    },
    // ... rest of your questions ...
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 600; // 10 minutes in seconds
let timerInterval;

// DOM Elements
const questionContainer = document.getElementById('question-container');
const timerDisplay = document.getElementById('timer');
const submitBtn = document.getElementById('submit-btn');
const progressBar = document.getElementById('progress');

// Check if user is logged in
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user') || '{}');

if (!token) {
    // Redirect to login page
    window.location.href = 'login.html';
}

// Add logout functionality
function setupNavigation() {
    const header = document.querySelector('header .container');
    
    // Create user info and logout button
    const userNav = document.createElement('div');
    userNav.className = 'user-nav';
    userNav.innerHTML = `
        <span>Welcome, ${user.username || 'User'}!</span>
        <button id="logout-btn" class="logout-btn">Logout</button>
    `;
    
    header.appendChild(userNav);
    
    // Add logout event listener
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    });
}

// Function to display the current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h3>Question ${currentQuestionIndex + 1} of ${questions.length}</h3>
        <p class="question-text">${question.question}</p>
        ${question.options.map(option => `
            <label>
                <input type="radio" name="answer" value="${option}">
                ${option}
            </label>
        `).join('')}
    `;
    updateProgressBar();
}

// Function to update the progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Function to format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${formatTime(timeLeft)}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Function to end the quiz
async function endQuiz() {
    clearInterval(timerInterval);
    const timeSpent = formatTime(600 - timeLeft);
    
    try {
        // API URL - replace with your actual backend URL in production
        const API_URL = 'http://localhost:5000/api';
        
        // Save result to backend
        const response = await fetch(`${API_URL}/quiz-results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                userId: user.id,
                username: user.username,
                score: score,
                totalQuestions: questions.length,
                timeSpent: timeSpent
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to save quiz results');
        }
        
        // Store results in localStorage for results page
        localStorage.setItem('quizScore', score);
        localStorage.setItem('totalQuestions', questions.length);
        localStorage.setItem('timeSpent', timeSpent);
        
        // Redirect to results page
        window.location.href = `results.html?score=${score}&totalQuestions=${questions.length}&timeSpent=${timeSpent}`;
    } catch (error) {
        console.error("Error saving results: ", error);
        alert(`Quiz Over!\nYour score: ${score}/${questions.length}\nTime spent: ${timeSpent}`);
        window.location.href = `results.html?score=${score}&totalQuestions=${questions.length}&timeSpent=${timeSpent}`;
    }
}

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
});

// Socket.io event handling for real-time updates
socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('new-result', (result) => {
    console.log('New quiz result received:', result);
    // If the user is on the results page, update the leaderboard
    if (window.location.pathname.includes('results.html')) {
        // Here you would call a function to update the leaderboard
        // This would be implemented in results.js
    }
});

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    displayQuestion();
    startTimer();
});