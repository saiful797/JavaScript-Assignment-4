function deleteInvalids(array) {

    if(Array.isArray(array) === true){
        let newArray = [];

        for(const arr of array){
            if(typeof arr === "number" &&  !isNaN(arr) ) {
                newArray.push(arr);
            }
            else continue;
        }

        return newArray;
    }

    else return "“Invalid Array”";
    
}

console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));
