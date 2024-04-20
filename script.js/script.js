async function getClientes() {
  const url = "http://localhost:8080/clientes";
  try {
    const response = await fetch(url);
    console.log(response);

    const dados = await response.json();
    console.log(dados);

    dados.forEach((clientes) => {
      const listaClientes = document.getElementById("listaClientes");

      const tr = document.createElement("tr");
      const div = document.createElement("div");

      //realizar a criação das celulas das nossas tabelas
      const nomeCliente = document.createElement("td");
      nomeCliente.textContent = clientes.nomeCliente;

      const numTelefone = document.createElement("td");
      numTelefone.textContent = clientes.numTelefone;

      const nomeEndereco = document.createElement("td");
      nomeEndereco.textContent = clientes.nomeEndereco;

      const anoNascimento = document.createElement("td");
      anoNascimento.textContent = clientes.anoNascimento;

      const tdEdith = document.createElement("img");
      tdEdith.src = "./assets/images/pencil-fill.svg";

      const tdDelete = document.createElement("img");
      tdDelete.src = "./assets/images/trash-fill.svg";

      tdEdith.addEventListener("click", () => {
        const id = clientes.id;
        alert(id);

        document.getElementById("title-form").textContent = "Atualizar Cliente";
        document.getElementById("btnCadastrar").textContent = "Atualizar";
        document.getElementById("nomeCliente").value = clientes.nomeCliente;
        document.getElementById("numTelefone").value = clientes.numTelefone;
        document.getElementById("nomeEndereco").value = clientes.nomeEndereco;
        document.getElementById("anoNascimento").value = clientes.anoNascimento;

        if (window.confirm("Você deseja atualizar cliente?")) {
          document.getElementById("btnCadastrar").removeEventListener("click");
          document
            .getElementById("btnCadastrar")
            .addEventListener("click", atualizarSerie);
          async function atualizarClientes() {
            try {
              const dadosEnviadosAtualizados = {
                nomeCliente: document.getElementById("nomeCliente").value,
                numTelefone: document.getElementById("numTelefone").value,
                nomeEndereco: document.getElementById("nomeEndereco"),
                value,
                anoNascimento: document.getElementById("anoNascimento").value,
              };
              const retorno = await fetch("${url}/${id}", {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(dadosEnviadosAtualizados),
              });

              if (retorno.ok) {
                alert("Cliente atualizada com sucesso!");
              } else {
                alert("Cliente não pode ser atualizada ${retorno.status");
              }
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
          }
        }
      });

      tdDelete.addEventListener("click", async () => {
        const id = clientes.id;

        if (window.confirm("Você deseja realmente apagar esse cliente?")) {
          try {
            const retorno = await fetch(`${url}/${id}`, {
              method: "DELETE",
            });

            if (retorno.ok) {
              alert("O cliente foi deletad0 com sucesso!");
            } else {
              alert(`Erro ao deletar cliente ${retorno.status}`);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });

      tr.appendChild(nomeCliente);
      tr.appendChild(numTelefone);
      tr.appendChild(nomeEndereco);
      tr.appendChild(anoNascimento);
      tr.appendChild(div);
      div.appendChild(tdEdith);
      div.appendChild(tdDelete);

      listaClientes.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}
getClientes();

//CADASTRO LIVROS

async function getLivros() {
  const url = "http://localhost:8080/livros";
  try {
    const response = await fetch(url);
    console.log(response);

    const dados = await response.json();
    console.log(dados);

    dados.forEach((livros) => {
      const listaLivros = document.getElementById("listaLivros");

      const tr = document.createElement("tr");
      const div = document.createElement("div");

      //realizar a criação das celulas das nossas tabelas
      const nomeCatLivro = document.createElement("td");
      nomeCatLivro.textContent = livros.nomeCatLivro;

      const nomeLivros = document.createElement("td");
      nomeLivros.textContent = livros.nomeLivros;

      const nomeEscritor = document.createElement("td");
      nomeEscritor.textContent = livros.nomeEscritor;

      const numEdicao = document.createElement("td");
      numEdicao.textContent = livros.numEdicao;
      const tdEdith = document.createElement("img");
      tdEdith.src = "./images/pencil-fill.svg";

      const tdDelete = document.createElement("img");
      tdDelete.src = "./images/trash-fill.svg";

      tdEdith.addEventListener("click", () => {
        const id = livros.id;
        alert(id);

        document.getElementById("title-form").textContent = "Atualizar Livros";
        document.getElementById("btnCadastrar").textContent = "Atualizar";
        document.getElementById("nomeCatLivro").value = livros.nomeCatLivro;
        document.getElementById("nomeLivros").value = livros.nomeLivros;
        document.getElementById("nomeEscritor").value = livros.nomeEscritor;
        document.getElementById("numEdicao").value = livros.numEdicao;

        if (window.confirm("Você deseja atualizar livros?")) {
          document.getElementById("btnCadastrarLivros").removeEventListener("click");
          document
            .getElementById("btnCadastrarLivros")
            .addEventListener("click", atualizarLivros);
          async function atualizarLivros() {
            try {
              const dadosEnviadosAtualizados = {
                nomeCatLivro: document.getElementById("nomeCatLivro").value,
                nomeLivros: document.getElementById("nomeLivros").value,
                nomeEscritor: document.getElementById("nomeEscritor"),
                value,
                numEdicao: document.getElementById("numEdicao").value,
              };
              const retorno = await fetch("${url}/${id}", {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(dadosEnviadosAtualizados),
              });

              if (retorno.ok) {
                alert("Livro atualizado com sucesso!");
              } else {
                alert("Livro não pode ser atualizado ${retorno.status");
              }
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
          }
        }
      });

      tdDelete.addEventListener("click", async () => {
        const id = livros.id

        if (window.confirm("Você deseja realmente apagar esse livro?" + id)) {
          try {
            const retorno = await fetch(`${url}/${id.toString()}`, {
              method: "DELETE",
            });

            alert(retorno)

            console.log(retorno);

            if (retorno.ok) {
              alert("O livro foi deletado com sucesso!");
            } else {
              alert(`Erro ao deletar livro ${retorno.status}`);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });

      tr.appendChild(nomeCatLivro);
      tr.appendChild(nomeLivros);
      tr.appendChild(nomeEscritor);
      tr.appendChild(numEdicao);
      tr.appendChild(div);
      div.appendChild(tdEdith);
      div.appendChild(tdDelete);

      listaLivros.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
  }
}
getLivros();
