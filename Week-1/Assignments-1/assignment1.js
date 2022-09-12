function countAandB (input){
    let count1=0

    for(let i=0; i<input.length; i++){
        if(input[i]==='a'||input[i]==='b'){
            count1+=1
        }
    }
   return count1
}

function toNumber (input){
   let f=[]
   for(let i=0;i<input.length;i++){
    if(input[i]==='a'){
        f.push(1)
    } else if(input[i]==='b'){
        f.push(2)
    } else if(input[i]==='c'){
        f.push(3)
    }else if(input[i]==='d'){
        f.push(4)
    }else if(input[i]==='e'){
        f.push(5)
    }
   }
   return f
}

let input1=['a','b','c','a','c','a','c']
console.log(countAandB(input1))
console.log(toNumber(input1))

let input2=['e','d','c','d','e']
console.log(countAandB(input2))
console.log(toNumber(input2))