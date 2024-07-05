// Example data fetch function
// async function fetchDashboardData() {
//     try {
//         const response = await fetch('/api/dashboard-metrics'); // Endpoint to fetch data
//         const data = await response.json();

//         document.getElementById('total-savings').innerText = `$${data.totalSavings}`;
//         document.getElementById('books-reused').innerText = `${data.booksReused}`;
//         document.getElementById('trees-saved').innerText = `${data.treesSaved}`;
//         document.getElementById('carbon-reduction').innerText = `${data.carbonReduction} kg`;
//         document.getElementById('active-users').innerText = `${data.activeUsers}`;
//     } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//     }
// }

// Call the function to update the dashboard
// fetchDashboardData();

// const express = require('express');
// const app = express();

// Example data (replace with actual database queries)
// const dashboardMetrics = {
//     totalSavings: 12345,
//     booksReused: 678,
//     treesSaved: 12,
//     carbonReduction: 345,
//     activeUsers: 456,
//     transactionsCompleted: 789,
//     sustainabilityScore: 85
// };

// app.get('/api/dashboard-metrics', (req, res) => {
//     res.json(dashboardMetrics);
// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

const bar = document.getElementById("bar");
const close = document.getElementById("close");

const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () =>{
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () =>{
        nav.classList.remove("active");
    })
}