const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["./images/pic1.jpg", "./images/pic2.jpg", "./images/pic3.jpg", "./images/pic4.jpg", "./images/pic5.jpg"];

/* Declaring the alternative text for each image file */

const altText = {
  "./images/pic1.jpg": "Closeup of a human eye",
  "./images/pic2.jpg": "Picture of a rock seen from above",
  "./images/pic3.jpg": "Closeup of white and purple flowers",
  "./images/pic4.jpg": "Image of egyptians drawings",
  "./images/pic5.jpg": "Closeup of a insect",
};

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image);
  //newImage.setAttribute('alt', xxx);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () =>{
    displayedImage.setAttribute('src', image);
  });
}

/* Adding event listenner 

thumbBar.addEventListener("click", (event) => {
  displayedImage.src = event.currentTarget.src
})*/


/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark"){
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else if (btn.getAttribute("class") === "light"){
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  };
})