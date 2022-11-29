
//start button
function start() {
    var result = Math.random() < 0.5 ? "X" : "O";
    
    document.getElementById("startres").innerText=" starter:  " + result;
    window.result = result
    document.getElementById("tbl").style.display="block";
    document.getElementById("strt").style.display="none";
    
}

function checkWin() {
    
    //X ding utg'anina tekshirish
    
    if (
        document.getElementById(11).innerText == document.getElementById(12).innerText && document.getElementById(11).innerText == document.getElementById(13).innerText && document.getElementById(11).innerText == "X"
    ) {

    document.getElementById(11).style.backgroundColor = "red";
    document.getElementById(12).style.backgroundColor = "red";
    document.getElementById(13).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("X won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  X" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(21).innerText == document.getElementById(22).innerText && document.getElementById(21).innerText == document.getElementById(23).innerText && document.getElementById(21).innerText == "X"
    ) {

    document.getElementById(21).style.backgroundColor = "red";
    document.getElementById(22).style.backgroundColor = "red";
    document.getElementById(23).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("X won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  X" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(31).innerText == document.getElementById(32).innerText && document.getElementById(31).innerText == document.getElementById(33).innerText && document.getElementById(31).innerText == "X"
    ) {

    document.getElementById(31).style.backgroundColor = "red";
    document.getElementById(32).style.backgroundColor = "red";
    document.getElementById(33).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("X won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  X" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(11).innerText == document.getElementById(21).innerText && document.getElementById(11).innerText == document.getElementById(31).innerText && document.getElementById(11).innerText == "X"
    ) {

    document.getElementById(11).style.backgroundColor = "red";
    document.getElementById(21).style.backgroundColor = "red";
    document.getElementById(31).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("X won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  X" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(12).innerText == document.getElementById(22).innerText && document.getElementById(12).innerText == document.getElementById(32).innerText && document.getElementById(12).innerText == "X"
    ) {

    document.getElementById(12).style.backgroundColor = "red";
    document.getElementById(22).style.backgroundColor = "red";
    document.getElementById(32).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("X won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  X" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(13).innerText == document.getElementById(23).innerText && document.getElementById(13).innerText == document.getElementById(33).innerText && document.getElementById(13).innerText == "X"
    ) {

    document.getElementById(13).style.backgroundColor = "red";
    document.getElementById(23).style.backgroundColor = "red";
    document.getElementById(33).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("X won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  X" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(11).innerText == document.getElementById(22).innerText && document.getElementById(11).innerText == document.getElementById(33).innerText && document.getElementById(11).innerText == "X"
    ) {

    document.getElementById(11).style.backgroundColor = "red";
    document.getElementById(22).style.backgroundColor = "red";
    document.getElementById(33).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("X won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  X" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(31).innerText == document.getElementById(22).innerText && document.getElementById(31).innerText == document.getElementById(13).innerText && document.getElementById(31).innerText == "X"
    ) {

    document.getElementById(31).style.backgroundColor = "red";
    document.getElementById(22).style.backgroundColor = "red";
    document.getElementById(13).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("X won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  X" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
 


    //O ding utg'anina tekshirish
    
    if (
        document.getElementById(11).innerText == document.getElementById(12).innerText && document.getElementById(11).innerText == document.getElementById(13).innerText && document.getElementById(11).innerText == "O"
    ) {

    document.getElementById(11).style.backgroundColor = "red";
    document.getElementById(12).style.backgroundColor = "red";
    document.getElementById(13).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("O won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  O" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(21).innerText == document.getElementById(22).innerText && document.getElementById(21).innerText == document.getElementById(23).innerText && document.getElementById(21).innerText == "O"
    ) {

    document.getElementById(21).style.backgroundColor = "red";
    document.getElementById(22).style.backgroundColor = "red";
    document.getElementById(23).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("O won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  O" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(31).innerText == document.getElementById(32).innerText && document.getElementById(31).innerText == document.getElementById(33).innerText && document.getElementById(31).innerText == "O"
    ) {

    document.getElementById(31).style.backgroundColor = "red";
    document.getElementById(32).style.backgroundColor = "red";
    document.getElementById(33).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("O won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  O" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(11).innerText == document.getElementById(21).innerText && document.getElementById(11).innerText == document.getElementById(31).innerText && document.getElementById(11).innerText == "O"
    ) {

    document.getElementById(11).style.backgroundColor = "red";
    document.getElementById(21).style.backgroundColor = "red";
    document.getElementById(31).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("O won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  O" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(12).innerText == document.getElementById(22).innerText && document.getElementById(12).innerText == document.getElementById(32).innerText && document.getElementById(12).innerText == "O"
    ) {

    document.getElementById(12).style.backgroundColor = "red";
    document.getElementById(22).style.backgroundColor = "red";
    document.getElementById(32).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("O won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  O" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(13).innerText == document.getElementById(23).innerText && document.getElementById(13).innerText == document.getElementById(33).innerText && document.getElementById(13).innerText == "O"
    ) {

    document.getElementById(13).style.backgroundColor = "red";
    document.getElementById(23).style.backgroundColor = "red";
    document.getElementById(33).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("O won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  O" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(11).innerText == document.getElementById(22).innerText && document.getElementById(11).innerText == document.getElementById(33).innerText && document.getElementById(11).innerText == "O"
    ) {

    document.getElementById(11).style.backgroundColor = "red";
    document.getElementById(22).style.backgroundColor = "red";
    document.getElementById(33).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("O won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  O" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }
    if (
        document.getElementById(31).innerText == document.getElementById(22).innerText && document.getElementById(31).innerText == document.getElementById(13).innerText && document.getElementById(31).innerText == "O"
    ) {

    document.getElementById(31).style.backgroundColor = "red";
    document.getElementById(22).style.backgroundColor = "red";
    document.getElementById(13).style.backgroundColor = "red";

    for (let allbtns of document.querySelectorAll(".btns")) allbtns.style.visibility = 'hidden';

    alert("O won");
    document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  O" ;
    document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';
    
    
    }


}




//durrangga tekshirish: changeContenet()ga kirish karak
function draw() {
    if (
        ((document.getElementById(11).innerText == "X") || (document.getElementById(11).innerText == "O")) &&
        ((document.getElementById(12).innerText == "X") || (document.getElementById(12).innerText == "O")) &&
        ((document.getElementById(13).innerText == "X") || (document.getElementById(13).innerText == "O")) &&
        ((document.getElementById(21).innerText == "X") || (document.getElementById(21).innerText == "O")) &&
        ((document.getElementById(22).innerText == "X") || (document.getElementById(22).innerText == "O")) &&
        ((document.getElementById(23).innerText == "X") || (document.getElementById(23).innerText == "O")) &&
        ((document.getElementById(31).innerText == "X") || (document.getElementById(31).innerText == "O")) &&
        ((document.getElementById(32).innerText == "X") || (document.getElementById(32).innerText == "O")) &&
        ((document.getElementById(33).innerText == "X") || (document.getElementById(33).innerText == "O")) 
    ) {
        alert("draw");
        document.getElementById("startres").innerText=" starter:  " + result  + "\n winner:  draw" ;
        document.getElementById("restrt").innerHTML = '<input type="button" onclick="location.reload()" value="restart">';

    }
}


//katakdagi knopka boshg'anda keb tur'gan X/O di yozadi
function changeContent(cell) {        
    document.getElementById(cell).innerText = result;
    result = (result == "X" ? "O" : "X");
    document.getElementById("restrt").innerText = " turn:  " + result; 
    checkWin();    
    draw();
};










