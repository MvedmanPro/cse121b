const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPockemon(url, doThis) {
    const responce = await fetch(url);
    //if fetch was successful:
    if (responce.ok) {
        // send JSON file .json() 
        const data = await response.json();
        doThis(data);
    }
}
function doStuff(data) {
    results = data;
    const outputElement = (document.querySelector("#output"));
    const html = `<h2>${data.name}</h2>
                  <img src = "${data.sprites.front_default}" alt= "${data.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

function doStuffList (data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
        const html = `<li data-url="${item.url}">${currentItem.name}</li>`;
        pokeListElement.innerHTML += html;
    });

}
getPockemon(url, doStuff);
console.log("second: ", results);
getPokemon(urlList, doStuffList);