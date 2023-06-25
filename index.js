
const input = document.getElementById("votes");//here variables are declared
const animalName = document.getElementById("name");
const character = document.getElementById("character-bar");
const animalVotes = document.getElementById("vote-count");
const form = document.getElementById("votes-form")
const votesReset = document.getElementById('btnreset');
const image = document.getElementById("image");


votesReset.style.cursor = 'pointer';let currentAnimal; //the below function resets votes value//
form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentAnimal.votes += parseInt(e.target.votes.value);
    depictAnimal(currentAnimal);
});

votesReset.addEventListener('click', () => {
    currentAnimal.votes = 0;
    depictAnimal(currentAnimal);
})


console.log("yourName")    //this code calls from the data base//
function getCharacters() {
    fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(renderAnimals)
}

getCharacters();function renderAnimals(animals) {
    animals.forEach(renderCharacters)
}

function renderCharacters(animal) {
    const spanElement = document.createElement('span')
    spanElement.innerHTML = animal.name;
    spanElement.style.cursor = 'pointer';
    character.appendChild(spanElement)
    spanElement.addEventListener('click', () => {
        currentAnimal = animal;
        depictAnimal(animal);
})

}function depictAnimal(animal){
    animalName.innerHTML = animal.name;
    image.src = animal.image;
    animalVotes.innerHTML = animal.votes;
}

