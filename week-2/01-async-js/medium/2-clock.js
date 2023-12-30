function clock(){
    const time=new Date()
    console.log(time.toLocaleTimeString());
}
setInterval(clock,1000)