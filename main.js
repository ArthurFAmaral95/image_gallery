const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["./images/pic1.jpg", "./images/pic2.png", "./images/pic3.png", "./images/pic4.png", "./images/pic5.png"];

/* Declaring the alternative text for each image file */

const altText = {
  "./images/pic1.jpg": "Closeup of a human eye",
  "./images/pic2.png": "Picture of a rock seen from above",
  "./images/pic3.png": "Closeup of white and purple flowers",
  "./images/pic4.png": "Image of egyptians drawings",
  "./images/pic5.png": "Closeup of a insect",
};

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image);
  newImage.setAttribute('alt', xxx);
  thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
