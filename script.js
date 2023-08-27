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