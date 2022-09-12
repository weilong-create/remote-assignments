function count(input){
    let con={};
    
    for(let i=0; i<input.length;i++){
        // 判斷是否有值，沒有宣告過就是undefined
        if(con[input[i]]===undefined){
           con[input[i]]=1
           
        }else {
            con[input[i]]+=1
        }
    }
    return con
}
let input1=['a','b','c','a','c','a','x','g','f','g']
console.log(count(input1));

function groupByKey(input){
    let con={}
    for(let i=0;i<input.length;i++){
        let count=input[i]
        if(con[count.key]===undefined){
            con[count.key]=count.value
        } else{
            con[count.key]+=count.value
        }
    }
    return con


}

let input2=[
    {key: 'a',value: 3},
    {key: 'b',value: 1},
    {key: 'c',value: 2},
    {key: 'a',value: 3},
    {key: 'c',value: 5},
];

console.log(groupByKey(input2))