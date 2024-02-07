function calculateMoney (ticketSale){

    if(ticketSale < 0) return "“Invalid Number”";
    
    else{
    
    let isMoney = ((ticketSale * 120) - (500 + (8 * 50)));
    
    return isMoney;
    
    }
    
    }
    
    function checkName(name) {
    
    if(typeof name === 'string'){
    
    if(( name[name.length-1].charCodeAt()>=65 && name[name.length-1].charCodeAt() <= 90 ) || ( name[name.length-1].charCodeAt() >= 97 && name[name.length-1].charCodeAt() <= 122 ) ){
    
    if( name[name.length-1] === "A" || name[name.length-1] === "a" || name[name.length-1] === "Y" || name[name.length-1] === "y" || name[name.length-1] === "I" || name[name.length-1] === "i" || name[name.length-1] === "E" || name[name.length-1] === "e" || name[name.length-1] === "O" || name[name.length-1] === "o" || name[name.length-1] === "U" || name[name.length-1] ===
    
    "u" || name[name.length-1] === "W" || name[name.length-1] === "w" ) return "Good Name";
    
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
    
    if(typeof arr === "number" && !isNaN(arr)) newArray.push(arr);
    
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

    console.log("........................................................");
    console.log("........................................................");
    console.log("........................................................");
    console.log("........................................................");
    console.log(calculateMoney(10));
    console.log(calculateMoney(1055));
    console.log(calculateMoney(93));
    console.log(calculateMoney(-130));
    console.log("........................................................");
    console.log("........................................................");
    
    console.log(checkName("Salman"));
    console.log(checkName("RAFEE"));
    console.log(checkName("Jhankar"));
    console.log(checkName("199"));
    console.log(checkName("[“Rashed”]"));
    console.log("........................................................");
    console.log("........................................................");

    console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));
    console.log(deleteInvalids(["“1”" , {num:2} , NaN ] ));
    console.log(deleteInvalids([ 1 , 2 , -3 ]));
    console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));
    console.log("........................................................");
    console.log("........................................................");

    console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }  ));
    console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" } ));
    console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook" } ));
    console.log(password({ name: "maisha" , birthYear: 2002 } ));
    console.log("........................................................");
    console.log("........................................................");

    console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400 ));
    console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ));
    console.log(monthlySavings([ 900 , 2700 , 3400] , 10000 ));
    console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));
    console.log("........................................................");
    console.log("........................................................");
    console.log("........................................................");
    console.log("........................................................");

    