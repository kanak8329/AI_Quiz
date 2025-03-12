// Import required libraries
import { Chart } from 'chart.js/auto';

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Get score and time from URL parameters or local storage
const score = getUrlParameter('score') || localStorage.getItem('quizScore') || 0;
const totalQuestions = getUrlParameter('totalQuestions') || localStorage.getItem('totalQuestions') || 30;
const timeSpent = getUrlParameter('timeSpent') || localStorage.getItem('timeSpent') || '0:00';

// Display user's score
const scoreDisplay = document.getElementById('score-display');
scoreDisplay.innerHTML = `
    <p>Your Score: <strong>${score}/${totalQuestions}</strong></p>
    <p>Time Taken: <strong>${timeSpent}</strong></p>
    <p>Accuracy: <strong>${Math.round((score / totalQuestions) * 100)}%</strong></p>
`;

// Create charts for visual representation
function createResultsChart() {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [score, totalQuestions - score],
                backgroundColor: ['#28a745', '#dc3545'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Your Performance'
                }
            },
            cutout: '70%'
        }
    });
}

// Simulated leaderboard data (replace with actual data from backend)
const leaderboardData = [
    { name: 'You', score: score, time: timeSpent },
    { name: 'Alex', score: 25, time: '7:32' },
    { name: 'Jordan', score: 27, time: '8:15' },
    { name: 'Taylor', score: 23, time: '6:45' },
    { name: 'Casey', score: 28, time: '9:10' },
    { name: 'Riley', score: 24, time: '8:00' }
];

// Sort leaderboard by score (and then by time for ties)
leaderboardData.sort((a, b) => {
    if (b.score === a.score) {
        // Convert time to seconds for comparison
        const aTimeParts = a.time.split(':');
        const bTimeParts = b.time.split(':');
        const aSeconds = parseInt(aTimeParts[0]) * 60 + parseInt(aTimeParts[1]);
        const bSeconds = parseInt(bTimeParts[0]) * 60 + parseInt(bTimeParts[1]);
        return aSeconds - bSeconds;
    }
    return b.score - a.score;
});

// Display leaderboard
function displayLeaderboard() {
    const resultsList = document.getElementById('results-list');
    
    leaderboardData.forEach((entry, index) => {
        const isYou = entry.name === 'You';
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${index + 1}. ${entry.name}</strong> ${isYou ? '(You)' : ''}
            <span>Score: ${entry.score}/${totalQuestions} | Time: ${entry.time}</span>
        `;
        
        if (isYou) {
            listItem.style.backgroundColor = '#e6f7ff';
            listItem.style.borderLeft = '4px solid #007bff';
        }
        
        resultsList.appendChild(listItem);
    });
}

// Create a bar chart for top performers
function createLeaderboardChart() {
    const ctx = document.getElementById('results-chart').getContext('2d');
    
    // Take only top 5 performers for the chart
    const topPerformers = leaderboardData.slice(0, 5);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topPerformers.map(entry => entry.name),
            datasets: [{
                label: 'Score',
                data: topPerformers.map(entry => entry.score),
                backgroundColor: topPerformers.map(entry => 
                    entry.name === 'You' ? '#007bff' : '#6c757d'),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: totalQuestions
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Top Performers'
                }
            }
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createResultsChart();
    displayLeaderboard();
    createLeaderboardChart();
});