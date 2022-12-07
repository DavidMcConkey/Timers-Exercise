//Countdown Function below
function countdown(num){
    let timer = setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(timer);
            console.log('Done!');
        } else{
            console.log(num);
        }
    },1000)
}

