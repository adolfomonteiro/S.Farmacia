function Mostrar(){
    var ul = document.getElementById("lista");
      ul.style.display = (ul.style.display === 'none' || ul.style.display === '') ? 'block' : 'none';
   }
  
      function addProduct() {
        var nome = document.getElementById('nome').value;
        var quantidade = parseInt(document.getElementById('quantidade').value);
        var preco = document.getElementById('preco').value;
        var produto = {
            nome : nome,
            quantidade : quantidade,
            preco : preco
        }
        document.getElementById('nome').value  = ""
        document.getElementById('quantidade').value = ""
        document.getElementById('preco').value = ""
  
      localStorage.setItem("myData",JSON.stringify(produto))
      }