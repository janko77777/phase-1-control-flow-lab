function scuberGreetingForFeet(feet){
  let message
  if (feet > 2500) {
    message = "No can do."
    } 
  else if (feet > 2000) {
    message = "I will gladly take your thirty bucks."
    }
  else if (feet <= 400) {
    message = "This one is on me!"
  }
return message
}

function ternaryCheckCity(city){
let message2
city === "NYC" ? (message2 = "Ok, sounds good.") : (message2 = "No go.");
return message2
}


function switchOnCharmFromTip(tip){
switch (tip) {
  case "generous":
    return "Thank you so much."
  case "not as generous":
    return "Thank you.";
  default:
    return "Bye.";
}
}