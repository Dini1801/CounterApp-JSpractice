let counter = document.getElementById("count")

count=0

function increment(){
    count+=1
    counter.textContent=count
}

function decrement(){
    if(count>0){
        count-=1
         counter.textContent=count
    }
    // count-=1
    // counter.textContent=count
}


function reset(){

    count=0
    counter.textContent=count
}
