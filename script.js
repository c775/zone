function loadContent(contentType) {
    const contentDiv = document.getElementById('content');

    fetch(`${contentType}.html`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching content:", error);
            contentDiv.innerHTML = '<p>Error loading content.</p>';
        });
}

function updateCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 11, 12);  // December is month 11 in JavaScript (0-indexed)
    const timeDiff = targetDate - now; // Difference in milliseconds
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the countdown
    document.querySelector('#countdown span').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

window.onload = function() {
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // 3 seconds
};
window.onload = function() {
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Splash Screen Handling
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 5000); // 3 seconds
};


//js for calender

const eventData = [
    [ // Day 1
        {time: "09:00 AM", event: "Meeting with team"},
        {time: "01:00 PM", event: "Lunch Break"}
    ],
    [ // Day 2
        {time: "10:00 AM", event: "Presentation prep"},
        {time: "03:00 PM", event: "Client Call"}
    ],
    [ // Day 3
        {time: "08:00 AM", event: "Brainstorming session"},
        {time: "02:00 PM", event: "Review Meeting"}
    ],
    [ // Day 4
        {time: "11:00 AM", event: "Project Kickoff"},
        {time: "04:00 PM", event: "Wrap up & Summary"}
    ]
];

function selectDay(index) {
    const events = eventData[index];
    const eventsDisplay = document.getElementById('eventsDisplay');

    let htmlContent = '';
    events.forEach(event => {
        htmlContent += `
            <div class="eventItem">
                <strong>${event.time}</strong>: ${event.event}
            </div>
        `;
    });

    eventsDisplay.innerHTML = htmlContent;
}
