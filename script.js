function loadInfo() {
  let header = ["Duckmanton", "ride the waves"];
  let info = [
    `There is a town in the UK called Duckmanton, and its local football team is called the Duckmanton Ducks. They even have a duck as their mascot!`,
    `Ducks have been observed surfing on waves in Australia. They ride the waves like little duck surfers, and then dive underwater to catch food.`,
  ];
  let num = Math.floor(Math.random() * header.length);
  document.getElementsByClassName("cta__header")[0].innerHTML = header[num];
  document.getElementsByClassName("cta__info")[0].innerHTML = info[num];
}
loadInfo();
