function swap(){
    var t1 = document.getElementById("t1").innerHTML;
    var t2 = document.getElementById("t2").innerHTML;
    document.getElementById("converted_data").value= t1;
    document.getElementById("t1").innerHTML= t2;
    document.getElementById("t2").innerHTML= t1;

}
function con(){
    var check = document.getElementById("t1").innerHTML;
    var value = document.getElementById("data").value;
    if (value != ""){
        if(check=="Celsius"){
            var f = value * 9 / 5 + 32;
            var result = f + ' \xB0F.';
            document.getElementById("converted_data").value = result;
        }
        else{
            var c = Math.round((value - 32) * 5 / 9);
            var result = c + ' \xB0C.';
            document.getElementById("converted_data").value = result;
        }
    }
    else{
        alert("please enter values");
    }
}
function setting(){
document.getElementById("converted_data").value = document.getElementById("t2").innerHTML;
}