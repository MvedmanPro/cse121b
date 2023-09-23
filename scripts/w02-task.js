/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */
/* Step 2 - Variables */
let fullName = "Kateryna Glazkova";
let currentYear = "2023";
const profilePicture = "images/photo_me1.jpg";
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#home picture img");
/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = ("currentYear");
yearElement.textContent = ("2023");

//*
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt",`Profile image of ${fullName}`);
/* Step 5 - Array */
let favFoods = ["Guacamole", "Asparagus", "Mango", "Oranges"];
foodElement.innerHTML += `<br>${favFoods}`;
let singleFavoriteFood = "Cheese";
favFoods.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;


