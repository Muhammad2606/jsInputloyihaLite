mySilder.oninput = showMySilder;
const mycard = document.querySelector('.card');
const done = document.getElementById('result');
const body = document.querySelector('body');

function showMySilder (){
    result.innerText = this.value;
    if(result.innerText = this.value <= 30){
        done.style.color = 'red';
        result.innerText = this.value;
        mycard.style.backgroundColor = 'yellow';
        body.style.backgroundColor = 'red'
       console.log('red');
    }
    else if(result.innerText = this.value <= 60){
        done.style.color = 'grey';
        result.innerText = this.value;
        mycard.style.backgroundColor = 'red';
        body.style.backgroundColor = 'grey'
       console.log('grey');
    }
    else if(result.innerText = this.value <= 90){
        done.style.color = 'blue';
        result.innerText = this.value;
        mycard.style.backgroundColor = 'grey';
        body.style.backgroundColor = 'blue'
       console.log('blue');
    }
    else if(result.innerText = this.value <= 100){
        done.style.color = 'yellow';
        result.innerText = this.value;
        mycard.style.backgroundColor = 'blue';
        body.style.backgroundColor = 'yellow'
        console.log('yellow');
    }
    else{
        result.innerText = this.value;
        console.log('false');
    }
}
