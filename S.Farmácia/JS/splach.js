var contador = 0
function Processar(){
var data = new Date()
contador = contador+1
 var cont = data.getSeconds().toString().padStart(2,"0")
 cont = contador
 console.log(cont)
 if(cont == 30){
   location.href="init.html"
 }
}
 setInterval(Processar, 500)