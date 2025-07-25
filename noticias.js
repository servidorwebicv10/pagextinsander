const apiKey = "4efa98a987bb4999893311f5bf6273c2";
const apiUrl = "https://newsapi.org/v2/top-headlines";
const newsContainer = document.querySelector(".news-container");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function fetchNews(query = "general") {
    const url = `${apiUrl}?country=us&q=${query}&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status !== "ok") {
            console.error("Error al obtener noticias:", data.message);
            return;
        }
        displayNews(data.articles);
    } catch (error) {
        console.error("Error al hacer la solicitud:", error.message);
    }
}
function displayNews(articles) {
    newsContainer.innerHTML = ''; 
    articles.forEach(article => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `<h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description || "No description available"}</p>
            <small>Source: ${article.source.name}</small>
            <hr>`;
        newsContainer.appendChild(newsItem);
    });
}
searchBtn.addEventListener("click", () => {
    const query = searchBox.value.trim();
    if (query) {
        fetchNews(query);
    } else {
        fetchNews();
    }
});
fetchNews();