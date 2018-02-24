var  fortuneOdds = ["Win 1 Million Dollars", "Free Date With Loved One", "Win a New Car 'Aston Martin'", 
"Eat a cookie", "Graduate School", "Become Popular (to an extenet)", 
"Obtain Friends (2 hrs)", "Receive Full Notes from Any Class Your Choose",];

function generateFortuneCookie(){
  var generator = math.floor(math.random() * fortuneOdds.length);
  document.getElementById("display-fortune") = fortuneOdds[generator];
}