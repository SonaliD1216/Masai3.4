document.getElementById('fetchData').addEventListener('click', fetchData);

// Function to fetch data
function fetchData() {
    // Clear previous data or errors
    document.getElementById('data').innerHTML = '';
    document.getElementById('error').innerHTML = '';

    // API URL (we'll use the Dog API to fetch random dog images)
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    // Use fetch to get data from the API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data from the response
        })
        .then(data => {
            // Display the fetched data (random dog image)
            const imageUrl = data.message;  // The image URL is in the 'message' key of the response
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = 'Random Dog';
            imageElement.style.maxWidth = '300px';
            document.getElementById('data').appendChild(imageElement);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            document.getElementById('error').innerHTML = `Error: ${error.message}`;
        });
}
