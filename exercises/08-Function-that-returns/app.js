var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

var dollarToYen1 = dollarToEuro(137);
var dollarToYen2 = euroToYen(dollarToYen1);

console.log(dollarToYen2);