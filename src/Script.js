var palanca=1
var anima = document.getElementById("anima")
Visualizar = document.getElementById("Visualizar");
function calcular(){
    var E= parseInt(document.getElementById("E").value);
    var B= parseInt(document.getElementById("B").value);
    var particle = document.getElementById("particle");

    var vel = (E/B);
    document.getElementById("resultado").innerHTML= vel + " (m/s)";
    if (vel <= 10){
        particle.style.cssText += 'display:block;position: relative;object-fit: cover;animation-name: animacion;animation-iteration-count: infinite;animation-timing-function: linear;animation-duration: 8s;';
        document.getElementById("linea2").classList.add("unactive");
    }
    else
    if (vel >= 10 && vel <= 50){
        particle.style.cssText += 'display:block;position: relative;object-fit: cover;animation-name: animacion;animation-iteration-count: infinite;animation-timing-function: linear;animation-duration: 4s;';
        document.getElementById("linea2").classList.add("unactive");
    }
    else
    if(vel>50){
        particle.style.cssText += 'display:block;position: relative;object-fit: cover;animation-name: animacion;animation-iteration-count: infinite;animation-timing-function: linear;animation-duration: 2s;';
        document.getElementById("linea2").classList.add("unactive");
    }
}
function mostrar(){
    var linea = document.getElementById("linea2");
    if(palanca==1){
        palanca = 2;
        Visualizar.innerHTML="Dejar de visualizar";
        document.getElementById("linea2").classList.add("active");
        anima.classList.add("equis");
        document.getElementById("linea2").classList.remove("unactive");
    }else{
        Visualizar.innerHTML="Visualizar explicación";
        document.getElementById("linea2").classList.remove("active");
        document.getElementById("linea2").classList.add("unactive");
        anima.classList.remove("equis");
        palanca=1
    }





}