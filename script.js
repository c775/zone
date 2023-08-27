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
    }, 2000); // 3 seconds
};


//js for calender

const eventData = [
    [ // Day 1: Welcome Day
        {time: "09:00 AM", event: "Welcome Breakfast"},
        {time: "10:00 AM", event: "Orientation & Introduction to Management Symposium"},
        {time: "12:00 PM", event: "Lunch at Venue"},
        {time: "01:00 PM - 05:00 PM", event: "Free Time for Exploring the Area"}
    ],
    [ // Day 2: Foundations of Management
        {time: "09:00 AM", event: "Opening Remarks"},
        {time: "10:00 AM", event: "Speaker 1: Strategic Decision Making"},
        {time: "11:30 AM", event: "Coffee Break"},
        {time: "12:00 PM", event: "Speaker 2: Navigating Organizational Culture"},
        {time: "01:00 PM", event: "Lunch Break"},
        {time: "02:30 PM", event: "Speaker 3: Effective Team Management"},
        {time: "04:00 PM", event: "Panel Discussion: Trends in Management"}
    ],
    [ // Day 3: Advanced Management Techniques
        {time: "09:00 AM", event: "Recap of Day 2"},
        {time: "10:00 AM", event: "Speaker 4: The Role of Data in Decision Making"},
        {time: "11:30 AM", event: "Coffee Break"},
        {time: "12:00 PM", event: "Speaker 5: Change Management in Dynamic Industries"},
        {time: "01:00 PM", event: "Lunch Break"},
        {time: "02:30 PM", event: "Speaker 6: Leadership vs Management: Striking the Balance"},
        {time: "04:00 PM", event: "Closing Remarks & Preview of Workshops"}
    ],
    [ // Day 4: Workshops and Practical Applications
        {time: "09:00 AM", event: "Workshop: Real-world Strategic Planning"},
        {time: "11:00 AM", event: "Coffee Break"},
        {time: "11:30 AM", event: "Workshop: Navigating Corporate Politics and Power Dynamics"},
        {time: "01:00 PM", event: "Lunch & Networking Session"},
        {time: "03:00 PM", event: "Interactive Session: Role-playing in Crisis Management"},
        {time: "05:00 PM", event: "Farewell and Commitment to Continuous Learning"}
    ]
];

// The selectDay function remains unchanged.


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


const speakersData = [
    {
        day: 1,
        image: 'headshots/andrew-cherng.jpg', , 
        name: 'Andrew cherng',
        role: 'CEO',
        area: 'Panda-RG',
        additionalInfo: 'rem ipsum dolor sit amet, consectetur adipiscing elit.'
    },    
	{
        day: 2,
        image: 'headshots/j-wang.jpg',  
        name: 'jeff wang',
        role: 'ZVP',
        area: 'T-Bone',
        additionalInfo: 'rem ipsum dolor sit amet, consectetur adipiscing elit. '
    },    
	{
        day: 3,
        image: 'headshots/p-cherng2.jpg', 
        name: 'peggy cherng',
        role: 'COO',
        area: 'Panda-RG',
        additionalInfo: 'rem ipsum dolor sit amet, consectetur adipiscing elit. '
    },

    // ... Add more speakers for each day similarly
];

function displaySpeakersForDay(day) {
    const speakers = speakersData.filter(s => s.day === day);
    const speakerContainer = document.getElementById('speakerContainer');

    let htmlContent = '';
    speakers.forEach(speaker => {
        htmlContent += `
            <div class="speaker-card">
                <img src="${speaker.image}" alt="${speaker.name}">
                <div class="speaker-info">
                    <h3>${speaker.name}</h3>
                    <p><strong>Role:</strong> ${speaker.role}</p>
                    <p><strong>Area:</strong> ${speaker.area}</p>
                    <p>${speaker.additionalInfo}</p>
                </div>
            </div>
        `;
    });

    speakerContainer.innerHTML = htmlContent;
}
