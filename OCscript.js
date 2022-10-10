class GroupDesc {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}
class Oc {
  constructor(name, pronouns, height, age, gender, description, image, link) {
    this.name = name;
    this.pronouns = pronouns;
    this.height = height;
    this.heightAM = function toFeet() {
      var realFeet = (this.height * 0.3937) / 12;
      var feet = Math.floor(realFeet);
      var inches = Math.round((realFeet - feet) * 12);
      return feet + "'" + inches + '"';
    };
    this.age = age;
    this.gender = gender;
    this.description = description;
    this.image_src = image;
    this.link = link;
  }
}

let Mortis = [];

let mortisDesc = new GroupDesc("Mortis", "A group led by a leader who escaped a certain lab 5 years ago with the help of the executives - they're all lab escapees. All of the higher ups aren't human except for the right hand man, though they aren't the only ones like that in this peculiar group.")
Mortis.push(mortisDesc)

let hanako = new Oc(
  "Hanako",
  "he/him",
  158,
  21,
  "Transgender male",
  "A mafia boss who usually comes off as mean, even if he's actually quite nice. He's known as the leader of Mortis, although admittedly, he doesn't take the title with pride and wishes to disband the group ASAP.",
  "/oc_headshots/hanako_headshot.png",
  "OCs_HTMLs/Mortis/Hanako.html"
);

let namida = new Oc(
  "NAMIDA",
  "she/her",
  183,
  25,
  "Cis female",
  "Despite not having a degree in biology or chemistry, Nami is quite skilled in making all sorts of chemicals and drugs, as well as helping others with heavy injuries, such as bullet or stab wounds. Along with that, she also manages most of the assassins in Mortis. What a troop!",
  "",
  ""
);

let tesa = new Oc(
  "T35-A (Tesa)",
  "he/they",
  166,
  16,
  "Non-binary",
  `A project that was made by [REDACTED]. Their body my be of a human's, but they have an AI for a brain, which results in them being the no. 1 assassin in Mortis. And yes, he can watch YouTube in his own brain. Yes, it is possible to hack into his mind/brain. Yes, they were made to say "penis" countless times.`,
  "",
  ""
);

let abaddon = new Oc(
  "Abaddon",
  "he/him",
  150,
  "a lot",
  "Cis male",
  "Abaddon is a skilled assassin, and doesn't really boast about it. The only reason he's gotten so good at it anyway is because he thrives off of drinking animal/human blood. As a butterfly he's supposed to enjoy sweets, but due to a mutation Abaddon greatly enjoys licking the blood off of his knife.",
  "",
  ""
);

let calypsus = new Oc(
  "Calypsus",
  "he/star",
  178,
  "a lot",
  "Cis male",
  "An extremely nice person. Calypsus, or Cal, is a normally soft-spoken person that shows a lot of compassion for people. Though despite that, star's quite good at his job - being an assassin and front-line fighter.",
  "",
  ""
);



Mortis.push(hanako);
Mortis.push(namida);
Mortis.push(tesa);
Mortis.push(abaddon);
Mortis.push(calypsus);

function createProfile(data) {
  if (document.querySelector("main").id === "OCs-main") {
    let groupWrapper = document.createElement("div");
    groupWrapper.className = "group-wrapper";

    let groupH2 = document.createElement("h2");
    groupH2.innerText = data[0].name;

    let groupDesc = document.createElement("h4");
    groupDesc.innerText = data[0].description;

    groupWrapper.append(groupH2)
    groupWrapper.append(groupDesc)
    for (let i = 1; i < data.length; i++) {
      let profileWrapper = document.createElement("div");
      profileWrapper.className = "profile-wrapper";

      let name = document.createElement("h3");
      name.innerText = data[i].name;
      profileWrapper.append(name);
      name.className = "name";
      name.innerText += " ";

      let pronouns = document.createElement("span");
      pronouns.append(data[i].pronouns);
      name.append(pronouns);

      let infoList = document.createElement("ul");

      let height = document.createElement("li");
      height.innerText = data[i].height + " cm (" + data[i].heightAM() + ")";
      infoList.append(height);

      let age = document.createElement("li");
      age.innerText = data[i].age + " years old";
      infoList.append(age);

      let gender = document.createElement("li");
      gender.innerText = data[i].gender;
      infoList.append(gender);

      let desc = document.createElement("li");
      desc.innerText = data[i].description;
      infoList.append(desc);

      let moreInfoWrapper = document.createElement("li");
      if (data[i].link === "") {
        moreInfoWrapper.innerText = "THERE IS NO LINK YET RUAAAAA";
        moreInfoWrapper.style = "color:red";
        console.log("no balls");
      } else {
        let moreInfo = document.createElement("a");
        moreInfo.href = data[i].link;
        moreInfo.innerText = "Read more here";
        moreInfoWrapper.append(moreInfo);
        console.log("balls");
      }
      infoList.append(moreInfoWrapper);

      let headshot = document.createElement("img");
      headshot.className = "headshot";
      if (data[i].image_src != "") {
        headshot.src = data[i].image_src;
      } else {
        headshot.style.display = "none";
        let noHeadshot = document.createElement("div");
        noHeadshot.innerText = "There is no headshot for this character yet!";
        infoList.append(noHeadshot);
      }

      profileWrapper.append(infoList);
      profileWrapper.append(headshot);

      groupWrapper.append(profileWrapper);
    }
    document.querySelector("main").append(groupWrapper);
  }
}

createProfile(Mortis);
