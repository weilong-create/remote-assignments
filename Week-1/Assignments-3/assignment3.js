function max(numbers){
    let c=numbers[0];
    for(let i=1; i<numbers.length;i++){
           if(c<numbers[i]){
            c=numbers[i]
           }
    }
   
    return c

}


function findPosition(numbers, target){
    let c=0
        for(let i =0;i<numbers.length;i++){
            if(numbers[i]===target){
                c=i;
                break;
            } else if(i===numbers.length-1 && numbers[i]!==target){
                c=-1
            }
        }
    return c
}

console.log(max([1,2,4,5]))
console.log(max([5,2,7,1,6]))
//
console.log(findPosition([5,2,7,1,6],5))
console.log(findPosition([5,2,7,1,6],7))
console.log(findPosition([5,2,7,7,7,1,6],7))
console.log(findPosition([5,2,7,1,6],8))
