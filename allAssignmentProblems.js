function calculateMoney (ticketSale){

    if(ticketSale < 0) return "“Invalid Number”";
    else{
        let isMoney = ((ticketSale * 120) - (500 + (8 * 50)));
        return isMoney;
    }
}
h






function checkName(name) { 

    if(typeof name === 'string'){

        if(( name[name.length-1].charCodeAt()>=65 &&  name[name.length-1].charCodeAt() <= 90 ) || ( name[name.length-1].charCodeAt() >= 97 &&  name[name.length-1].charCodeAt() <= 122 ) ){

            if( name[name.length-1] === "A" || name[name.length-1] === "a" || name[name.length-1] === "Y" || name[name.length-1] === "y" || name[name.length-1] === "I" || name[name.length-1] === "i" || name[name.length-1] === "E" || name[name.length-1] === "e" || name[name.length-1] === "O" || name[name.length-1] === "o" || name[name.length-1] === "U" || name[name.length-1] === 
            "u" || name[name.length-1] === "W" || name[name.length-1] === "w" )  return "Good Name";

            else return "Bad Name";
        }

        else return "invalid";
    }

    else return "invalid";
}







function deleteInvalids(array){

    if(Array.isArray(array) === true){
        let newArray = [];

        for(const arr of array){
            if(typeof arr === "number" &&  !isNaN(arr)) newArray.push(arr);
            else continue;
        }

        return newArray;
    }

    else return "“Invalid Array”";  
}







function password(obj) {

    if(obj.birthYear < 1000 || typeof obj.name === "undefined" || typeof obj.birthYear === "undefined" || typeof obj.siteName === "undefined") return "invalid";

    else{
        const char = obj.siteName;
        const letter = obj.siteName.charAt(0);
        const letterUpper = letter.toUpperCase();
        const otherLetter = char.slice(1);

        return letterUpper+otherLetter + "#" + obj.name + "@" + obj.birthYear;
    }    
}







function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) === true){

        let total = 0;

        for(const array of arr){
            if(array >=3000){
                total += array - (array * 0.2);
            }
            else total += array;
        }

        if((total - livingCost) > -1) return total - livingCost;

        else return "“earn more”";
    }

    else return "invalid input";
}