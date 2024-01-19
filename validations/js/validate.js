function validate(e) {
    e.preventDefault();
    /* variables for each form elements */
            // document.forName.fieldName.value
    var name = document.cForm.name.value;
    var email = document.cForm.email.value;
    var mobile = document.cForm.mobile.value;
    var city = document.cForm.city.value;
    var gender = document.cForm.gender.value;
    var lang =[];
    var checkOpt = document.getElementsByName("lang[]");
    for(var i=0; i < checkOpt.length; i++) {
        if(checkOpt[i].checked) {
            //populate lang array with selected input values
            lang.push(checkOpt[i].value);
        }
    }

    console.log('lang =', lang)

    /* define an error variables */
    var nameErr = emailErr = mobileErr = genderErr = langErr = true;
    //var nameErr = true;
    //var emailErr = true;
    //var mobileErr = true;
    // var genferErr = true;
    // var langErr = true;

    /* name validation */
    if(name === "") {
        printError("nameErr","Name field cannot be empty");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        /* 
             /reg exp/
             ^ -> beginnig match
             \s -> white space \S -> not white space
             $ -> ending match
             + -> 1 match or more than 1
        */
       if(regex.test(name) === false) {
        printError("nameErr","Please enter a valid name");
       } else {
        printError("nameErr","");
        nameErr = false
       }
    }
    /* email validation */
    if(email === "") {
        printError("emailErr","Email field cannot be empty");
    } else {
        let regex = /^[a-zA-Z0-9\S]+@[a-zA-Z0-9\S]+\.[a-zA-Z\S]{2,6}$/;
        // let regex = /^[a-zA-Z0-9_\S]+@[a-zA-Z0-9-\S]+\.(com|in|net|org|edu|biz)+$/;
        if(regex.test(email) === false) {
            printError("emailErr","Invalid Email id");
        }  else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    /* mobile validation */
    if(mobile === "") {
        printError("mobileErr","Mobile feld cannot be empty");
    } else {
        let regex = /^(\+91|0|91)?[6-9]\d{9}$/;

        /* \d digit 
            \D no digit
            +91 9848967865
            91
            9974827487
        */
            if(regex.test(mobile)===false) {
                printError("mobileErr","Inavalid Mobile number");
            }else{
                printError("mobileErr","");
                 emailErr= false
                }
    
    }

    /* city validation */
    if(city === "null") {
        printError("cityErr", "Please select city name");
    } else {
        printError("cityErr","");
        cityErr = false;
    }

    /* gender validation */
    if(gender === "") {
        printError("genderErr", "Please select gender");
    } else {
        printError("genderErr","");
        genderErr = false;
    }


    /* lang validation */
    if(lang.length === 0) {
        printError("langErr","Please select language");
    } else {
        printError("langErr","");
        langErr = false;
    }

    if(!(nameErr || emailErr || mobileErr || genderErr || cityErr || langErr)) {
        let data = {
            name: name,
            email: email,
            mobile: mobile,
            gender: gender,
            city: city,
            language: lang
        };
        console.log('data = ', data);
    }
}


/* defining a function to display the error message */
function printError(eleId,msg) {
    document.getElementById(eleId).innerText = msg;
}

function resetForm(e) {
    alert("Form reset completed");
    window.location.reload();
}