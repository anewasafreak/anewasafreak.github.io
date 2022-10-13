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

function createProfile(data) {
  if (document.querySelector("main").id === "OCs-main") {
    let groupWrapper = document.createElement("div");
    groupWrapper.className = "group-wrapper";

    let groupH2 = document.createElement("h2");
    groupH2.innerText = data[0].name;

    let groupDesc = document.createElement("h4");
    groupDesc.innerText = data[0].description;

    groupWrapper.append(groupH2);
    groupWrapper.append(groupDesc);
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

      let gender = document.createElement("li");
      gender.innerText = data[i].gender;
      infoList.append(gender);

      let height = document.createElement("li");
      height.innerText = data[i].height + " cm (" + data[i].heightAM() + ")";
      infoList.append(height);

      let age = document.createElement("li");
      age.innerText = data[i].age + " years old";
      infoList.append(age);

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

let Mortis = [];

let mortisDesc = new GroupDesc(
  "Mortis",
  "A group led by a leader who escaped a certain lab 5 years ago with the help of the executives - they're all lab escapees. All of the higher ups aren't human except for the right hand man, though they aren't the only ones like that in this peculiar group."
);

Mortis.push(mortisDesc);

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

Mortis.push(hanako);
Mortis.push(namida);
Mortis.push(tesa);

createProfile(Mortis);

let RtL = [];

let RtlDesc = new GroupDesc(
  "Reasoning to live (RtL)",
  "Abaddon has been living for almost a hundred years by now, but he's been less living and more so existing. However, his capacity for simply existing is nearing its end, and Abaddon is hurrying to find his reason to not just exist, but finally start living."
);

RtL.push(RtlDesc);

let abaddon = new Oc(
  "Abaddon",
  "he/him",
  150,
  "a lot",
  "Cis male",
  "He doesn't talk a lot. Or sometimes even at all. Abaddon didn't use to be this way though - in fact, he was a really loud and obnoxious person, though after a wake up call from Calypsus, he realized he's too much to handle. And so here we are, with an emo fuckin fag",
  "",
  ""
);

let calypsus = new Oc(
  "Calypsus",
  "he/star",
  178,
  "a lot",
  "Cis male",
  "An extremely nice person. Cal is a normally soft-spoken person that shows a lot of compassion, though that's mostly kept up in order for star to forget his insecurities.",
  "",
  ""
);

RtL.push(abaddon);
RtL.push(calypsus);

createProfile(RtL);

let LiB = [];

libDesc = new GroupDesc(
  "Lost in a backyard (Lib/LiaB)",
  "Years ago, there used to be six friends. Now, there's five friends. After one of the friends passed away, the eclectic group with Eve, Adam, Noella, Mushi, Kai, and once upon a time, Francis, got broken apart fue to the grief. Despite them all doubting that there's any point in getting back together, Mushi continues to try and get everyone back together, but they themselves aren't sure if it's worth it."
);

LiB.push(libDesc);

let eve = new Oc(
  "Eve (Ieva Pancaravičiūtė)",
  "she/her",
  172,
  18,
  "Cis female",
  "A nice young lady studying cooking in university. Eve is mostly just listening into conversations and hopping into them, however, whenever she's with someone close, she'll easily talk for hours about subjects she likes. Quite a happy person and a nice friend to have around.",
  "",
  ""
);

let adam = new Oc(
  "Adam (Adomas Pancarevičius)",
  "he/him",
  180,
  21,
  "Cis male",
  "An outgoing person, even more so than his sister Eve. Adam mostly enjoys music and makes quite a living off of performing in cafes and bars. He also uploads covers and his own songs to the internet, which also gains him a fair bit of money. It's unclear whether or not this money is gotten due to his techniques, how nice and open-minded he is, or just his looks.",
  "",
  ""
)

let noella = new Oc(
  "Noella Baketman",
  "she/they",
  178,
  20,
  "Demi-girl",
  "Noella can easily talk to people and doesn't mind it, however, they prefer to do people watching. It isn't clear to most people why. Though I can let you in on a secret of hers: she collects information on"
)

LiB.push(eve);
LiB.push(adam);

createProfile(LiB)