const fs=require("fs")

fs.readFile("a.txt","utf-8",(err,data)=>{
    if(err)console.log(err);
    else{
        const content=data.replace(/\s+/g,' ')
        console.log(content);
    }
})
//we can print after readfile, we can also print data inside readfile but if you try to print content after fsreadfile
// that it will don't print any thing for example:


//let content=""
// fs.readFile("a.txt","utf-8",(err,data)=>{
//     if(err)console.log(err);
//     else{
//         content=data.replace(/\s+/g,' ')
//     }
// })
//console.log(content) 
//this will not print anything in terminal becase our js thread go through it before reading a file.


//this function is not the part of above code
// function printdata(data){
//     console.log(data);
// }