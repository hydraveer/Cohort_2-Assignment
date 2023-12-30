function sleep(milliseconds) {
    const time=new Date()
    let promise=new Promise(function(resolve){
        while(new Date()-time<milliseconds){
            //some operation
        }
        resolve()
    })
    return promise
}

module.exports = sleep;