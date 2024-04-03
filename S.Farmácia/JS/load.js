var cont = 0
      
function Processar(){
    cont = cont+1
  var data = new Date()

  var segundo = data.getSeconds()
segundo = cont
console.log(segundo)

if(segundo == 15){
    window.location.href = "init.html"
}
    }
setInterval(Processar,1000)