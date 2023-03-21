function transformToObjects(numberArray) {

    return numberArray.map(number => {
        return { val: number }
    });


}
//using the map method im able to select each item in the array and return that number in the format I provided - this is by using the .map method with an arrow function