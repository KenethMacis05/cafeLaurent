window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();
    const dishes = document.querySelectorAll('.main-dish');

    let results = [];

    dishes.forEach(dish => {
        const name = dish.querySelector('h4').textContent.toLowerCase();
        const description = dish.querySelector('p').textContent.toLowerCase();

        if (name.includes(query) || description.includes(query)) {
            results.push(dish);
        }
    });

    showSearchResults(results);
});

function showSearchResults(results) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = '<p></p>';
        searchResults.style.display = 'block';
        return;
    }

    const ul = document.createElement('ul');

    results.forEach(result => {
        const li = document.createElement('li');
        li.innerHTML = result.innerHTML;
        ul.appendChild(li);
    });

    searchResults.appendChild(ul);
    searchResults.style.display = 'block';
}
