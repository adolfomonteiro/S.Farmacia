function Processar(){
const menu = document.getElementById("menu")
let body = document.getElementsByTagName("body")[0]
menu.addEventListener("change",()=>{
  const menuValue = menu.value
  
  if(menuValue === "Cliente"){
    location.href="cliente.html?adolfo"
  }
  else if(menuValue === "Funcionário"){
    location.href = "func.html?adolfo"
  }
  else if(menuValue === "Gerente"){
   location.href = "gerente.html?adolfo" 
  }
})
}