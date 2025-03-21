var counter = document.getElementById('count');
var increment = document.getElementById('increment');
var  decrement = document.getElementById('decrement')
var reset = document.getElementById('reset');


var count = 0;
increment.addEventListener('click', function(){
    count++;
    counter.innerText = count;
});
decrement.addEventListener('click',function(){
    if (count == 0){
        return;
    }
    
    count--;
    counter.innerHTML = count;
})

reset.addEventListener('click', function(){
    count = 0;
    counter.innerText = count;
});

function setDhikr(dhikr) {
    document.querySelector('h1').innerText = `📿 ${dhikr}`;
    count = 0;
    counter.innerText = count;
}