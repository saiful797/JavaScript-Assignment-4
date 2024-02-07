function monthlySavings(arr , livingCost) {

    //console.log(Array.isArray(arr), livingCost);

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

console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));
