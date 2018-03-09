function cnp() {
	var cnp = document.getElementById("cnpbox").value;
	var bd = document.getElementById("bdbox").value;
	var bm = document.getElementById("bmbox").value;
	var by = document.getElementById("bybox").value;
	
	// check if fields are empty and if CNP is starting with "0";
	if (cnp == "" || by == "" || bm == "" || bd == "") {
		alert("Fields cannot be left empty!!! Please fill in all required data.");
	}
	else if (cnp.substring(0,1) == 0) {
			alert("CNP cannot begin with '0' !!!");
	}	
	else {
		// check if CNP is a valid number, if it has less or more than 13 characters; 
		if (isNaN(cnp)) {
			alert("CNP must be a number !!!");
		}
		if (cnp.length < 13) {
			alert ("CNP is too short !!!");
		}
		else if (cnp.length > 13) {
			alert("CNP is too long !!!");
		}

		// check if BirthYear input is a valid number and in specified interval;
		if (isNaN(by)) {
		    alert("BirthYear must be a number !!!");
		}
		if (by == 0 || by.length == 3 || by.length == 4) {
			if (by < 1800) {
			  alert ("BirthYear must be greater than 1799 !!!");
			}
			if (by > 2017) {
			  alert("BirthYear must be smaller than 2018  !!!");
			}	
			by = by.substring(2);
		}

		/* check if BirthMonth input is a valid number, 
		if it is only one character it will authomaticaly add "0" in front,
		and check that is between 1 and 12; */
		if (isNaN(bm)) {
			alert("BirthMonth must be a number !!!");
		}
		if (bm.length == 1) {
			bm = "0" + bm;
		}
		if (bm <= 0) {
			alert ("BirthMonth must be greater than 0 !!!");
		}
		if (bm >= 13) {
			alert("BirthMonth must be smaller than 13  !!!");
		}

		/* check if BirthDay input is a valid number, 
		if it is only one character it will authomaticaly add "0" in front,
		and check that is between 1 and 31; */
		if (isNaN(bd)) {
			alert("BirthDay must be a number !!!");
		}
		if (bd.length == 1) {
			bd = "0" + bd;
		}
		if (bd <= 0) {
			alert ("BirthDay must be greater than 0 !!!");
		}
		if (bd >= 32) {
			alert("BirthDay must be smaller than 32  !!!");
		}

		// verify if Birth Data from input is coresponding in CNP;
		if (by == cnp.substring(1,3) && bm == cnp.substring(3,5) && bd == cnp.substring(5,7)) {
			alert("Your Birth Date is corresponding to the CNP you entered !!!");
		}
		else {
			alert("Your Birth Date is not matching the CNP !!! Please check input data and try again.")
		}

		// verify if CNP is valid;
		var constanta = "279146358279";
		suma = 0, rest = 0;
		for (i = 0; i < constanta.length; i++) {
	        suma = suma + cnp.charAt(i) * constanta.charAt(i);
	    }
	    rest = suma % 11;
	    if ((rest < 10 && rest == cnp.charAt(12)) || (rest == 10 && cnp.charAt(12) == 1)) {
	    	alert("Congratulation. Your CNP is a real one !!!");
	    }	
        else {
        	alert("Hmmm. Looks like your CNP is not a real deal !!!");
        }
	}	
}

	