//Random game Function
function randomGame(){
    let counter = 0
    let timer = setInterval(function(){
        counter++;
        let number = Math.random();
        if(number > 0.75){
            clearInterval(timer);
            console.log(`It took ${counter} attempt(s).`);
        }
    },1000)
}