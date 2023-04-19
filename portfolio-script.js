let pictureNames = [
  "ane_portrait.png",
  "hanako_ref_sheet.png",
  "mirai_portrait.png",
  "noella_pfp.png",
  "random_portrait.png",
  "eye.png",
  "couple_drawing.jpg",
  "messy_portrait.jpg",
  "watercolor_landscape.jpg",
  "mirai_portrait_2.png",
  "cubism.png",
  "scaramouche_octoling.png",
];

function addPicture(namespace, array) {
  for (i = 0; i < array.length; i++) {
    let imageSource = namespace + array[i];
    let image = document.createElement("img");
    image.src = imageSource;
    image.className = "portfolio-img";
    image.addEventListener("click", (image) => {
      background = document.createElement("div");
      background.style =
        "position:fixed; width:100%; height:100%; background-color: rgba(0, 0, 0, 0.7); top:0; left:0; display: flex; justify-content: center;";
      background.id = "background";
      background.addEventListener("click", function (e) {
        background.remove();
      });

      let img = document.createElement("img");
      img.style = "margin: 5%; max-height: 100%;";
      img.src = imageSource;
      background.append(img);

      document.querySelector("body").append(background);
    });
    document.querySelector("main").append(image);
  }
}

addPicture("./portfolio/", pictureNames);

//fetch('file.txt')
//  .then(response => response.text())
//  .then(text => console.log(text))