function runQuery(n){

let consoleBox = document.getElementById("console"+n);
let tableBox = document.getElementById("table"+n);

consoleBox.innerText="Ejecutando...\n";

setTimeout(()=>{

if(n==1){
consoleBox.innerText+="✔ Aplicando descuento\n";

renderTable(tableBox,["Marca","Precio"],[
["Toyota",18000],
["Chevrolet",10800],
["Kia",13500],
["Hyundai",27000]
]);
}

if(n==2){
consoleBox.innerText+="✔ Calculando total\n";

renderTable(tableBox,["Auto","Total"],[
["Toyota",20000],
["Chevrolet",24000],
["Kia",15000],
["Hyundai",30000]
]);
}

},1000);
}

function renderTable(container,headers,data){
let html="<table class='result-table'><tr>";
headers.forEach(h=>html+="<th>"+h+"</th>");
html+="</tr>";

data.forEach(r=>{
html+="<tr>";
r.forEach(c=>html+="<td>"+c+"</td>");
html+="</tr>";
});

html+="</table>";
container.innerHTML=html;
}

/* extras */
function res1(){
document.getElementById("r1").innerText="Aplica descuento a cada auto";
}

function res2(){
document.getElementById("r2").innerText="Multiplica precio × cantidad";
}

function toggleEj(id){
let e=document.getElementById(id);
e.style.display=(e.style.display==="none")?"block":"none";
}

function pista5(){
document.getElementById("p5").innerText="Usa JOIN + SUM + descuento()";
}

function respuesta5(){
document.getElementById("r5").innerText="SELECT ... JOIN ... SUM(...)";
}

function pista6(){
document.getElementById("p6").innerText="Crea function IVA + SUM";
}

function respuesta6(){
document.getElementById("r6").innerText="CREATE FUNCTION iva...";
}

function volver(){
window.location.href="index.html";
}
/* ===================== */
/* FUNCIONES PARA INDEX */
/* ===================== */

function irEjercicio(){
    window.location.href = "ejercicio.html";
}

function ejemplo1(){
    document.getElementById("ex1").innerText =
    "✔ Recibe el precio\n✔ Calcula el 10%\n✔ Resta el descuento\n✔ Devuelve el resultado";
}

function ejemplo2(){
    document.getElementById("ex2").innerText =
    "✔ Recibe el precio\n✔ Calcula el 12% de IVA\n✔ Suma el impuesto\n✔ Devuelve el total";
}
