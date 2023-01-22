let pictureNames = [
  "abaddon_pfp.png",
  "Ane_portrait.png",
  "hanako_ref.png",
  "lawrence.png",
  "mirai.png",
  "Noella_pfp.png",
  "random_portrait.png",
];

function addPicture(namespace, array) {
  for (i = 0; i < array.length; i++) {
    let image = document.createElement('img');
    image.src = namespace + array[i];
    image.className = 'portfolio-img';
    document.querySelector("main").append(image);
    console.log('fart');
  }
}

addPicture("./portfolio_pictures/", pictureNames);