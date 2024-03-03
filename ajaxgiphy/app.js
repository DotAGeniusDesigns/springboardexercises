async function searchGiphy(searchTerm) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym',
            limit: 20
        }
    });
    addGif(res.data);
}
    
function addGif(response) {
    const gifs = response.data;
    if (gifs.length > 0) {
        const randomIndex = Math.floor(Math.random() * gifs.length);
        const gifData = gifs[randomIndex];
        const gifDiv = document.createElement('div');
        gifDiv.classList.add('gif');
        gifDiv.innerHTML = `<img src="${gifData.images.fixed_height.url}" alt="${gifData.title}">`;
        document.querySelector('#gifs').appendChild(gifDiv);
    }
}

const form = document.querySelector('#gifForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector('#search').value;
    searchGiphy(searchTerm);
});

document.querySelector('#removegifs').addEventListener('click', (e) => {
    document.querySelector('#gifs').innerHTML = '';
});



