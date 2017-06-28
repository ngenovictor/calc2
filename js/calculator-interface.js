
var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
	$("form#calc").submit(function(event){
		event.preventDefault();
		var num1 = parseInt($("input#num1").val());
		var sign = $("select#sign").val();
		var num2 = parseInt($("input#num2").val());
		var aCalculate = new Calculator(num1,num2);
		var result = aCalculate.doMath(sign);
		$("div#results").text("");
		$("div#results").append(result);
		$("div#results").show();

		$("div#pingponged-results").fadeIn(2000,function(){
			$("div#pingponged-results").text("PingPongedResults");
			$("div#pingponged-results").append("<ul></ul>");
			aCalculate.pingPong(result);
		})
			
	

	})
})