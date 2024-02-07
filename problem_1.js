function calculateMoney (ticketSale){
    if(ticketSale < 0){
        return "“Invalid Number”";
    }
    else{
        let isMoney = ((ticketSale * 120) - (500 + (8 * 50)));
         return isMoney;
    }
}

console.log(calculateMoney(0));

