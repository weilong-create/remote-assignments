var express=require("express");

var server1=express();
server1.get("/", function(req,res){
    res.send("Hello,my Server")
})

// 第四題
server1.get("/data",function(req,res){
    const number=req.query.number;
    // console.log(typeof(number))
    let count=0
    if(number===undefined){
        res.send("Lack of Parameter")
    }
    else if (isNaN(number)){
        res.send("Wrong Parameter")
    }else{
        for(let i=1;i<=number;i++){
            count+=i
        }
        res.send(`${count}`)
    }
   
})


var path=require('path');
server1.use(express.static(path.join(__dirname,'public')))
server1.get('/sum.html',function(req,res){
    res.sendFile(_dirname+"/"+sum.html)
})


server1.listen(3000, function(){
    console.log("已啟動")
})