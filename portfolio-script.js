let pictureNames = [
  "ane_portrait.png",
  "hanako_ref_sheet.png",
  "mirai_portrait.png",
  "random_portrait.png",
  "eye.png",
  "couple_drawing.jpg",
  "watercolor_landscape.jpg",
  "mirai_portrait_2.png",
  "cubism.png",
  "scaramouche_octoling.png",
];

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
}

function addPicture(namespace, array) {
  for (i = 0; i < array.length; i++) {
    let imageSource = namespace + array[i];
    let image = document.createElement("img");
    image.src = imageSource;
    image.className = "portfolio-img";
    image.addEventListener("click", (image) => {
      background = document.createElement("div");
      background.style =
        "";
      background.id = "background";
      background.addEventListener("click", function (e) {
        background.remove();
      });

      let img = document.createElement("img");
      img.style = "margin: 5%;";
      img.id = "selected-img";
      img.src = imageSource;
      background.append(img);

      document.querySelector("body").append(background);
    });
    document.querySelector("main").append(image);
  }
}

addPicture("./portfolio/", pictureNames);