function delayedResult(n1, n2, delaytime, callback){
    // your code here
    setTimeout(function(){
        return callback(n1+n2);
    }, delaytime)

}

delayedResult(4, 5, 3000, function(result)
{
  console.log(result);
})

delayedResult(-5, 10, 2000, function(result)
{
  console.log(result);
})