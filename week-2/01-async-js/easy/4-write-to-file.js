const fs=require("fs")
const content="This content must be added in our text file"
fs.writeFile("a.txt",content,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("We have successfully added content in our file");
    }
})