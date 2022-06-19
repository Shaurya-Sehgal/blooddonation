let br = {
    "A+": [" A+ ", " A- ", " O+ ", " O- "],
    "A-": [" A- ", " O- "],
    "O+": [" O+ ", " O- "],
    "O-": [" O- "],
    "B+": [" B+ ", " B- ", " O+ ", " O- "],
    "B-": [" B- ", " O- "],
    "AB+": [" A+ ", " A- ", " O+ ", " O- ", " AB+ ", " AB- ", " B+ ", " B- "],
    "AB-": [" AB- ", " A- ", " B- ", " O- "],
}

let bg = {
    "A+": [" A+ ", " AB+ "],
    "A-": [" A- ", " A+ ", " AB+ ", " AB- "],
    "O+": [" O+ ", " B+ ", " A+ ", " AB+ "],
    "O-": [" A+ ", " A- ", " O+ ", " O- ", " AB+ ", " AB- ", " B+ ", " B- "],
    "B+": [" B+ ", " AB+ "],
    "B-": [" B- ", " B+ ", " AB+ ", " AB- "],
    "AB+": [" AB+ "],
    "AB-": ["AB+ ", " AB- "],
}

function checkbloodgroup() {
    let givenbloodgroup = document.getElementById("bg").value
    if(givenbloodgroup == ""){
        document.getElementById("give").innerHTML = "Enter valid option"
        document.getElementById("recive").innerHTML = "Enter valid option"
    }
    else{
    document.getElementById("give").innerHTML = bg[givenbloodgroup] 
    document.getElementById("recive").innerHTML = br[givenbloodgroup] 
    }
}