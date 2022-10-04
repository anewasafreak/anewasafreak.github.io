let Mortis = [
  {
    name: "Hanako",
    pronouns: "he/him",
    height: "5'3 ()",
    species: "humanoid ()",
    age: "21",
    sexuality: "Gay",
    gender: "transgender male",
    backstory: "lorem ipsum hahdkshfkj  akjfhjka",
    image_src: "/oc_headshots/hanako_headshot.png",
  },
  {
    name: "Hanako",
    pronouns: "he/him",
    height: "5'3 ()",
    species: "humanoid ()",
    age: "21",
    sexuality: "Gay",
    gender: "transgender male",
    backstory: "lorem ipsum hahdkshfkj  akjfhjka",
    image_src: "/oc_headshots/hanako_headshot.png",
  },
];

function createProfile(data) {
  for (let i = 0; i < data.length; i++) {
    let main = document.querySelector("main");

    let profileWrapper = document.createElement("div");
    profileWrapper.className = "profile-wrapper";

    let name = document.createElement("h3");
    name.innerText = data[i].name;
    profileWrapper.append(name);
    name.className = "name";

    let pronouns = document.createElement("span");
    pronouns.append(data[i].pronouns);
    name.append(pronouns);

    let infoList = document.createElement("ul");

    let height = document.createElement("li");
    height.innerText = data[i].height;
    infoList.append(height);

    let species = document.createElement("li");
    species.innerText = data[i].species;
    infoList.append(species);

    let age = document.createElement("li");
    age.innerText = data[i].age;
    infoList.append(age);

    let sexuality = document.createElement("li");
    sexuality.innerText = data[i].sexuality;
    infoList.append(sexuality);

    let desc = null;

    let headshot = document.createElement("img");
    headshot.src = data[i].image_src;
    headshot.className = "headshot";

    profileWrapper.append(infoList);
    profileWrapper.append(headshot);

    document.body.append(profileWrapper)

    console.log(profileWrapper);
  }
}

let HTML = DOMImplementation.createHTMLDocument('title');

let a = document.createElement('a');
a.innerText = "click here to go to god knows where"
a.href = HTML

document.body.append(a)
console.log(a)

createProfile(Mortis);
