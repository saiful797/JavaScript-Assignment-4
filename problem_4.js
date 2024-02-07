function password(obj) {

    if(obj.birthYear < 1000 || typeof obj.name === "undefined" || typeof obj.birthYear === "undefined" || typeof obj.siteName === "undefined") return "invalid";

    else{
        const char = obj.siteName;

        const letter = obj.siteName.charAt(0);

        //console.log(obj.siteName.charAt(0));

        const letterUpper = letter.toUpperCase();
        const otherLetter = char.slice(1);

        //console.log(char.slice(1));

        return letterUpper+otherLetter + "#" + obj.name + "@" + obj.birthYear;
    }
    
    
}

console.log(password({ name: "maisha" , birthYear: 2002 } ));