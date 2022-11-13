const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const altText = {
  "pic1.jpg" : "Closeup of a human eye",
  "pic2.jpg" : "Picture of a rock seen from above",
  "pic3.jpg": "Closeup of white and purple flowers",
  "pic4.jpg": "Image of egyptians drawings",
  "pic5.jpg": "Closeup of a insect"
};

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `./images/${image}`);
  newImage.setAttribute('alt', altText[image]);
  thumbBar.appendChild(newImage);

  /*newImage.addEventListener("click", () =>{
    displayedImage.setAttribute('src', `./images/${image}`);
    displayedImage.alt = altText[image];
  });*/
}

/* Adding event listenner */

thumbBar.addEventListener("click", (event) => {
  displayedImage.src = event.target.getAttribute("src");
  displayedImage.alt = event.target.getAttribute("alt");
})


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