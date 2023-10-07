/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kateryna",
    photo: "images/photo_me1.jpg",
    favoriteFoods: [
        "Guacamole", 
        "Asparagus", 
        "Mango", 
        "Oranges",
        "Cheese"
    ],
    hobbies: [
        "Cooking",
        "Reading",
        "Drawing",
    ],
    placesLived: [" "],
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Odesa, Ukraine",
        length: "18 years",
    }
);




/* DOM Manipulation - Output */
/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

// Get the photo property from an object
const photo = myProfile.photo;

// Get the name property from an object
const name = myProfile.name;

// Set the src and alt attributes of the img element with an ID of photo to the photo and name values
document.getElementById("photo").setAttribute("src", photo);
document.getElementById("photo").setAttribute("alt", name);



/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby
    document.getElementById("hobbies").appendChild(ul);
})


/* Places Lived DataList */
const placesLived = myProfile.placesLived;
const dl = document.getElementById("places-lived");

placesLived.forEach((place) => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;
    const dd = document.createElement("dd");
    dd.textContent = place.length;
    dl.appendChild(dt);
    dl.appendChild(dd);
})




