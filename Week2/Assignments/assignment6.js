function delayedResultPromise(n1,n2,delayTime)
{
    let n= new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(n1+n2);
        },delayTime)
    })
    return n;
}

delayedResultPromise(4,5,3000).then(console.log);


async function main(){
    let ans=await delayedResultPromise(4,5,3000)
    console.log(ans)
}



main();