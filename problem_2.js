function checkName(name) {

    if(typeof name === 'string'){

        if(( name[name.length-1].charCodeAt()>=65 &&  name[name.length-1].charCodeAt() <= 90 ) || ( name[name.length-1].charCodeAt() >= 97 &&  name[name.length-1].charCodeAt() <= 122 ) ){

            if(name[name.length-1] === "A" || name[name.length-1] === "a" || name[name.length-1] === "Y" || name[name.length-1] === "y" || name[name.length-1] === "I" || name[name.length-1] === "i" || name[name.length-1] === "E" || name[name.length-1] === "e" || name[name.length-1] === "O" || name[name.length-1] === "o" || name[name.length-1] === "U" || name[name.length-1] === 
            "u" || name[name.length-1] === "W" || name[name.length-1] === "w" ){

                return "Good Name";
            }

            else return "Bad Name";
        }

        else return "invalid";
    }

    else return "invalid";
}

console.log(checkName("[“Rashed”]"));