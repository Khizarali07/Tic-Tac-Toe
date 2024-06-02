let a=document.getElementsByClassName("col1");
let b=document.getElementById("message");
let d=0;
let num=Math.trunc(Math.random()*9);
let e=0;
let f;
let g=0;


function main (x){
    if (x==100){
    g=1;
    }

    else if (x==200){
    g=2;
    } 

    if (g==1){
        if (x==100 ||x==200){}
        else {multi(x);}
    }
    else if (g==2){
        if (x==100 ||x==200){}
        else {computer(x);}
    }
}


function multi(x){
    d++;
    if (d%2!=0){
    if (d<=9){
        if (a[x].innerHTML==""){
            a[x].innerHTML="X";  
        }
    }
}
    else if (d%2==0){
    if (d<9){
        if (a[x].innerHTML==""){
            a[x].innerHTML="O";
        }
    }
}
    if (d==9) {
        b.innerHTML="game is over !!! Restart it";
    }
    e=gameover1();
    if (e==9){
        d=e;
    }
}

function gameover1(){
    if (a[0].innerHTML=="X" && a[1].innerHTML=="X" && a[2].innerHTML=="X" || a[3].innerHTML=="X" && a[4].innerHTML=="X" && a[5].innerHTML=="X" || a[6].innerHTML=="X" && a[7].innerHTML=="X" && a[8].innerHTML=="X" || a[0].innerHTML=="X" && a[3].innerHTML=="X" && a[6].innerHTML=="X" || a[1].innerHTML=="X" && a[4].innerHTML=="X" && a[7].innerHTML=="X" || a[2].innerHTML=="X" && a[5].innerHTML=="X" && a[8].innerHTML=="X" || a[0].innerHTML=="X" && a[4].innerHTML=="X" && a[8].innerHTML=="X" || a[6].innerHTML=="X" && a[4].innerHTML=="X" && a[2].innerHTML=="X"){
        b.innerHTML="X win the game !!!";
        return 9;
    }
    else if (a[0].innerHTML=="O" && a[1].innerHTML=="O" && a[2].innerHTML=="O" || a[3].innerHTML=="O" && a[4].innerHTML=="O" && a[5].innerHTML=="O" || a[6].innerHTML=="O" && a[7].innerHTML=="O" && a[8].innerHTML=="O" || a[0].innerHTML=="O" && a[3].innerHTML=="O" && a[6].innerHTML=="O" || a[1].innerHTML=="O" && a[4].innerHTML=="O" && a[7].innerHTML=="O" || a[2].innerHTML=="O" && a[5].innerHTML=="O" && a[8].innerHTML=="O" || a[0].innerHTML=="O" && a[4].innerHTML=="O" && a[8].innerHTML=="O" || a[6].innerHTML=="O" && a[4].innerHTML=="O" && a[2].innerHTML=="O"){
        b.innerHTML="O win the game !!!";
        return 9;
    }
}


function computer(x){
    if (d<9){
        if (a[x].innerHTML==""){
            a[x].innerHTML="X";
            d++;
        }
    }
    if (d<9){
        while (a[num].innerHTML!=""){
            num=Math.trunc(Math.random()*9);
        }
        comp(num);
        d++;
        }
    else {
        b.innerHTML="game is over !!! Restart it";
    }
    let e=gameover2();
    if (e==9){
        d=e;
    }
}

function comp(x){
        a[x].innerHTML="O";
}

function gameover2(){
    if (a[0].innerHTML=="X" && a[1].innerHTML=="X" && a[2].innerHTML=="X" || a[3].innerHTML=="X" && a[4].innerHTML=="X" && a[5].innerHTML=="X" || a[6].innerHTML=="X" && a[7].innerHTML=="X" && a[8].innerHTML=="X" || a[0].innerHTML=="X" && a[3].innerHTML=="X" && a[6].innerHTML=="X" || a[1].innerHTML=="X" && a[4].innerHTML=="X" && a[7].innerHTML=="X" || a[2].innerHTML=="X" && a[5].innerHTML=="X" && a[8].innerHTML=="X" || a[0].innerHTML=="X" && a[4].innerHTML=="X" && a[8].innerHTML=="X" || a[6].innerHTML=="X" && a[4].innerHTML=="X" && a[2].innerHTML=="X"){
        b.innerHTML="You win the game !!!";
        return 9;
    }
    else if (a[0].innerHTML=="O" && a[1].innerHTML=="O" && a[2].innerHTML=="O" || a[3].innerHTML=="O" && a[4].innerHTML=="O" && a[5].innerHTML=="O" || a[6].innerHTML=="O" && a[7].innerHTML=="O" && a[8].innerHTML=="O" || a[0].innerHTML=="O" && a[3].innerHTML=="O" && a[6].innerHTML=="O" || a[1].innerHTML=="O" && a[4].innerHTML=="O" && a[7].innerHTML=="O" || a[2].innerHTML=="O" && a[5].innerHTML=="O" && a[8].innerHTML=="O" || a[0].innerHTML=="O" && a[4].innerHTML=="O" && a[8].innerHTML=="O" || a[6].innerHTML=="O" && a[4].innerHTML=="O" && a[2].innerHTML=="O"){
        b.innerHTML="You loss the game, Try again !!!";
        return 9;
    }
}