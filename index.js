//what about distances between 400-2000
//what about distances between 2000-2500
//THIS IS FIZZBUZZ
//FiZZBUZZ can be written backwards if switch statement is used. (but double check!)

function scuberGreetingForFeet(feet) {
  let result;
  if (feet <= 400) {
    result = "This one is on me!";
  } else if (feet > 2500) {
    result = "No can do.";
  } else if (feet > 2000) {
    result = "I will gladly take your thirty bucks.";
  }
  return result;
}

//

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  //const tip = "generous";
  let response;

  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    case "thanks for everything":
      response = "Bye.";
      break;
  }
  return response;
}
