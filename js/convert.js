function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  console.log(message);
  doc.getElementById("resultsentence").innerHTML = message;

  
}
// giving all the currencys a function that will calculate the conversion rate
function euroToUSdollar() {
	var amount = parseInt(document.getElementById("value1").value);

  var dollars = amount * 1.06;
  var message = amount + ' dollars converts to ' + dollars  ;
  console.log(message);
  doc.getElementById("resultsentence").innerHTML = message;

}

function euroToJapaneseYen() {
	var amount = parseInt(document.getElementById("value1").value);

  var yen = amount * 121.12;
  var message = amount + ' yen converts to ' + yen  ;
  console.log(message);
  doc.getElementById("resultsentence").innerHTML = message;

}

function euroToBitcoin() {
	var amount = parseInt(document.getElementById("value1").value);

  var bitcoin = amount * 0.00082;
  var message = amount + ' bitcoin converts to ' + bitcoin  ;
  console.log(message);
  doc.getElementById("resultsentence").innerHTML = message;

}