//PESEL VALIDATE
function validatepesel(pesel) {
    var pesel = event.value
    var reg = /^[0-9]{11}$/;
    if(reg.test(pesel) == false) 
        return false;
    else
    {
        var digits = (""+pesel).split("");         
        var checksum = (1*parseInt(digits[0]) + 3*parseInt(digits[1]) + 7*parseInt(digits[2]) + 9*parseInt(digits[3]) + 1*parseInt(digits[4]) + 3*parseInt(digits[5]) + 7*parseInt(digits[6]) + 9*parseInt(digits[7]) + 1*parseInt(digits[8]) + 3*parseInt(digits[9]))%10;
        if(checksum==0) checksum = 10;
            checksum = 10 - checksum;
 
        return (parseInt(digits[10])==checksum);
    }
}

if (!validatepesel(event.value)){
    app.alert("Błędny numer PESEL - Proszę wprowadzić ponownie.");
    event.value = "";
}
//PESEL VALIDATE END


//E-MAIL VALIDATE
if (event.value) { 
	var test1 = /\d\d\d@[mM][iI][lL][nN][eE][tT]/.test(event.value); 
	if ((test1) || (!eMailValidate(event.value))){
		app.alert("Błędny adres e-mail!\n\n" + "Proszę wpisać adres spoza domeny @milnet-z.");
		event.value = "";
	}
}
//E-MAIL VALIDATE END


//SUBMITE FORM VALIDATE 
document.getElementById('Tekst17').disabled = !cansubmit;
//SUBMITE FORM VALIDATE END