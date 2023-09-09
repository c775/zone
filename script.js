function loadContent(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('contentContainer').innerHTML = this.responseText;
        }
    };
    xhr.send();
}

const speakersData = [
    {
        day: 2,
        image: 'https://via.placeholder.com/150', 
        name: 'John Doe',
        role: 'CEO at ABC Corp',
        area: 'Strategic Decision Making',
        additionalInfo: 'John has over 20 years of experience...'
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

window.onload = function() {
    displaySpeakersForDay(2);  // Load Day 2 speakers for testing on page load.
}
