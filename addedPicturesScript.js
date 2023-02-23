let pictureNames = [
  "abaddon_pfp.png",
  "ane_portrait.png",
  "hanako_ref.png",
  "lawrence.png",
  "mirai_portrait.png",
  "noella_pfp.png",
  "random_portrait.png",
];

function addPicture(namespace, array) {
  for (i = 0; i < array.length; i++) {
    let image = document.createElement('img');
    image.src = namespace + array[i];
    image.className = 'portfolio-img';
    document.querySelector("main").append(image);
  }
}

addPicture("./portfolio/", pictureNames);