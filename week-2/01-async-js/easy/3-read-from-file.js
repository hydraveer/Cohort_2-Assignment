const fs=require("fs")
fs.readFile("a.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
//if we make a take that too much time for executing, our thread will stuck and even our fs.readFile
//the result, we can't print it in out console
// let a=0
// for(let i=0;i<10000000000000;i++){
//     a=a+1
// }
// console.log(a);
