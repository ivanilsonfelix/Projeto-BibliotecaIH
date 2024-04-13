document.getElementById('btnCadastrar').addEventListener('click', async (e) =>{
    e.preventDefault();
  
    // url do endpoint da aplicação web api
    const url = "http://localhost:8080/series"
  
    //valores que está vindo do front-end
    const dadosEnviados = {
      'id': Math.floor(Math.random() * 100),
      'nomeCliente': document.getElementById('nomeCliente').value,
      'numTelefone': document.getElementById('numTelefone').value,
      'nomeEndereço': document.getElementById('nomeEndereço').value,
      'anoNascimento': document.getElementById('anoNascimento').value
    }
    try{
      await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(dadosEnviados)
      })
      const response = await fetch(url)
      if (response.ok) {
        alert("O cliente foi cadastrado com sucesso!")
      }else{
        alert("Erro ao cadastrar cliente. Tente novamente")
      }
      document.getElementById('btnCadastrar').removeEventListener('click', arguments.callee)
    } catch (error){
      console.log('O consumo do post deu ruim ${error}');
    }
  })