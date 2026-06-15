import {
    powers,
    avatars,
    getRandomItem,
    getRarity
}
from "./data.js";

const createBtn =
document.querySelector("#createBtn");

const heroesContainer =
document.querySelector("#heroes");

const heroCount =
document.querySelector("#heroCount");

const searchInput =
document.querySelector("#search");

let heroes = [];

// Rest Parameter Example
function logHeroes(...heroNames){
    console.log(heroNames);
}

const renderHeroes = () => {

    heroesContainer.innerHTML = "";

    heroes.forEach(hero => {

        // Object Destructuring
        const {
            id,
            name,
            avatar,
            power,
            level,
            rarity,
            favorite
        } = hero;

        heroesContainer.innerHTML += `

        <div class="card ${rarity.toLowerCase()}">

            <div class="favorite"
            onclick="toggleFavorite(${id})">

                ${favorite ? "⭐" : "☆"}

            </div>

            <div class="avatar">
                ${avatar}
            </div>

            <h2>${name}</h2>

            <p class="power">
                ${power}
            </p>

            <p class="level">
                Power Level:
                ${level}
            </p>

            <p>
                ${rarity}
            </p>

            <button
            class="deleteBtn"
            onclick="deleteHero(${id})">

                Delete

            </button>

        </div>
        `;
    });

    heroCount.textContent =
    heroes.length;
};

createBtn.addEventListener(
"click",
() => {

    const heroName =
    document
    .querySelector("#heroName")
    .value;

    const level =
    Math.floor(
        Math.random()*100
    ) + 1;

    const hero = {

        id:Date.now(),

        name:
        heroName ||
        `Hero-${heroes.length+1}`,

        avatar:
        getRandomItem(avatars),

        power:
        getRandomItem(powers),

        level,

        rarity:
        getRarity(level),

        favorite:false
    };

    // Spread Operator
    heroes = [...heroes, hero];

    logHeroes(
        ...heroes.map(
            hero => hero.name
        )
    );

    renderHeroes();
});

window.deleteHero = id => {

    heroes =
    heroes.filter(
        hero => hero.id !== id
    );

    renderHeroes();
};

window.toggleFavorite = id => {

    heroes = heroes.map(hero => {

        if(hero.id === id){

            return {
                ...hero,
                favorite:
                !hero.favorite
            };
        }

        return hero;
    });

    renderHeroes();
};

searchInput.addEventListener(
"input",
e => {

    const searchText =
    e.target.value.toLowerCase();

    document
    .querySelectorAll(".card")
    .forEach(card => {

        card.style.display =
        card.innerText
        .toLowerCase()
        .includes(searchText)
        ? "block"
        : "none";
    });
});