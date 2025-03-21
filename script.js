var counter = document.getElementById('count');
var increment = document.getElementById('increment');
var reset = document.getElementById('reset');

var count = 0;
increment.addEventListener('click', function(){
    count++;
    counter.innerText = count;
});