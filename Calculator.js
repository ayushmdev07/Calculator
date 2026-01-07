
function inputdata(val){
    document.getElementById("screen").value+= val;
}


function clearscreen(){
    document.getElementById("screen").value = "";
}

function finalvalue(){
     let screenval =    document.getElementById("screen").value;
    let result = eval(screenval);
     document.getElementById("screen").value=result;
}
function sclear(){
     let screenval =   document.getElementById("screen").value;
     document.getElementById("screen").value= screenval.slice(0,-1);
}