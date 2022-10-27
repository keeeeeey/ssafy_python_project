/* 
  아래에 코드를 작성해주세요.
*/
const searchInputTag = document.querySelector(".search-box__input")
const searchBtn = document.querySelector(".search-box__button")
let sectionTag = document.createElement("section")
sectionTag.setAttribute("class", "cards")
document.body.appendChild(sectionTag)

const API_URI = "http://ws.audioscrobbler.com/2.0/?method=album.search&format=json"

function fetchAlbums (keyword, page = 1, limit = 10) {
  sectionTag.remove()

  sectionTag = document.createElement("section")
  sectionTag.setAttribute("class", "cards")
  document.body.appendChild(sectionTag)

  axios({
    method: "GET",
    url: API_URI,
    params: {
      "limit": limit,
      "page": page,
      "album": keyword,
      "api_key": "807001277afbd459f35ff459ab629c19"
    }
  })
    .then((response) => {
      const albums = response.data.results.albummatches.album
      albums.forEach((album) => {
        const imgURL = album.image[0]["#text"]
        const artistName = album.artist
        const albumName = album.name

        const card = document.createElement("div")
        card.setAttribute("class", "search-result__card")
        card.innerHTML = `<img src=${imgURL}>
          <div class="search-result__text">
            <h2>${artistName}</h2>
            <p>${albumName}</p>
          </div>`
        sectionTag.appendChild(card)
      })
    })
    .catch((error) => {
      alert("잠시 후 다시 시도해주세요")
    })
}

searchBtn.addEventListener("click", function (event) {

  const keyword = searchInputTag.value

  if (keyword.trim()) {
    fetchAlbums(keyword)
  } else {
    alert("빈 값")
  }
  
})