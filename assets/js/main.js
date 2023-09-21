const createClock = () => {
    const createTimeInSecond = second => {
        const data = new Date(second * 1000);
        return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
        })
    }
    
    const clock = document.querySelector('.clock');
    let second = 0;
    let timer;
    
    const startClock = () => {
        timer = setInterval(function(){
            second++;
            clock.innerHTML = createTimeInSecond(second);
        },1000)
    }
    
    document.addEventListener('click',function(e){
        const element = e.target;
        if(element.classList.contains('start')){
            startClock();
            clock.style.color = 'black';
        }
    
        if(element.classList.contains('pause')){
            clearInterval(timer);
            clock.style.color = 'red';
        }
    
        if(element.classList.contains('reset')){
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.style.color = 'black';
            second = 0;
        }
    })
}

createClock();