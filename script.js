// Trending Anime
async function trending(){
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const data = await res.json();
  const container = document.getElementById("trending");
  data.data.slice(0,8).forEach(anime=>{
    container.innerHTML += `
      <div class="card">
        <img src="${anime.images.jpg.image_url}">
        <h3>${anime.title}</h3>
        <a href="watch.html?video=https://www.youtube.com/embed/dQw4w9WgXcQ">Watch</a>
      </div>
    `;
  });
}

trending();

// Search Anime
async function searchAnime(){
  const query = document.getElementById("search").value;
  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
  const data = await res.json();
  const container = document.getElementById("results");
  container.innerHTML = "";
  data.data.forEach(anime=>{
    container.innerHTML += `
      <div class="card">
        <img src="${anime.images.jpg.image_url}">
        <h3>${anime.title}</h3>
        <a href="watch.html?video=https://www.youtube.com/embed/dQw4w9WgXcQ">Watch</a>
      </div>
    `;
  });
}
async function loadAnimePages(){

const container = document.getElementById("animeList");

for(let page=1; page<=40; page++){   // 40 pages ≈ 1000 anime

const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
const data = await res.json();

data.data.forEach(anime=>{

container.innerHTML += `
<div class="card">

<img src="${anime.images.jpg.image_url}">
<h3>${anime.title}</h3>
<p>⭐ ${anime.score || "N/A"}</p>
<p>${anime.year || ""}</p>

</div>
`;

});

}

}

loadAnimePages();
