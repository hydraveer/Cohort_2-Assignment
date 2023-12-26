let n=0
function repeat(){
  setTimeout(()=>{
    n=n+1
    console.log(n);
    repeat()
  },1000)
}
repeat()