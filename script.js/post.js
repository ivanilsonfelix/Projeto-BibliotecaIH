//CADASTRO CLIENTE
document
  .getElementById("btnCadastrarUsuario")
  .addEventListener("click", async (e) => {
    e.preventDefault();

    // url do endpoint da aplicação web api
    const url = "http://localhost:8080/clientes";

    const idUser = Math.floor(Math.random() * 100)
    const id = "" + idUser
    //valores que está vindo do front-end
    const dadosEnviados = {
      id: id,
      nomeClientes: document.getElementById("nomeClientes").value,
      numTelefone: document.getElementById("numTelefone").value,
      nomeEndereco: document.getElementById("nomeEndereco").value,
      anoNascimento: document.getElementById("anoNascimento").value,
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(dadosEnviados),
      });
      const response = await fetch(url);
      if (response.ok) {
        alert("O cliente foi cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar cliente. Tente novamente");
      }

      // document.getElementById('btnCadastrar').removeEventListener('click', arguments.callee)
    } catch (error) {
      console.log(`O consumo do post deu ruim ${error}`);
    }
  });

//CADASTRO LIVROS

document
  .getElementById("btnCadastrarLivros")
  .addEventListener("click", async (e) => {
    e.preventDefault();

    // url do endpoint da aplicação web api
    const url = "http://localhost:8080/livros";

    const idLivros = Math.floor(Math.random() * 100)
    const id = "" + idLivros

    //valores que está vindo do front-end
    const dadosEnviados = {
      id: id,
      nomeCatLivro: document.getElementById("nomeCatLivro").value,
      nomeLivros: document.getElementById("nomeLivros").value,
      nomeEscritor: document.getElementById("nomeEscritor").value,
      numEdicao: document.getElementById("numEdicao").value,
    };
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(dadosEnviados),
      });
      const response = await fetch(url);

      console.log(response);
      if (response.ok) {
        alert("O livro foi cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar livro. Tente novamente");
      }
      // document.getElementById('btnCadastrar').removeEventListener('click', arguments.callee)
    } catch (error) {
      console.log(`O consumo do post deu ruim ${error}`);
    }
  });
