function trycatch(){
var x = prompt("Entre com um número maior que 0 e menor que 11");
try{
    if(x<=0){
        throw("error1");
    }
    if(x>=11){
        throw("error2");
    }
    if(isNaN(parseInt(x))){ /// "isNaN" verifica se é número
        throw("error3");
    }
}
catch(error){
if(error=="error1"){
    alert("O número deve ser maior que 0");
}
if(error=="error2"){
    alert("O número deve ser menor que 11");
}
if(error=="error3"){
    alert("Entre somente com números maior que 0 e menor que 11");
}
}
finally{
    alert("Finalizado!");
}
}