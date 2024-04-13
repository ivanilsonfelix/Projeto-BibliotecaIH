const url = "http://localhost:8080/series"

 async function getSeries() {
    try{ 
        const response = await fetch(url)
        console.log(response);

        const dados = await response.json()
        console.log(dados);

        dados.forEach(series=> {
            const listaSeries = document.getElementById('listaSeries');
        
            const tr = document.createElement('tr');
            const div = document.createElement('div');
            
        
            //realizar a criação das celulas das nossas tabelas
            const nomeCliente = document.createElement('td')
            nomeCliente.textContent = series.nomeCliente
        
            const numTelefone = document.createElement('td')
            numTelefone.textContent = series.numTelefone
        
            const nomeEndereco = document.createElement('td')
            nomeEndereco.textContent = series.nomeEndereco
        
            const anoNascimento = document.createElement('td')
            anoNascimento.textContent = series.anoNascimento

            const tdEdith = document.createElement('img')
            tdEdith.src = './assets/images/pencil-fill.svg'

            const tdDelete = document.createElement('img')
            tdDelete.src = './assets/images/trash-fill.svg'

            tdEdith.addEventListener('click', () => {
                const id = series.id
                alert(id);

                document.getElementById('title-form').textContent = "Atualizar Cliente"
                document.getElementById('btnCadastrar').textContent = "Atualizar"
                document.getElementById('nomeCliente').value = series.nomeCliente
                document.getElementById('numTelefone').value = series.numTelefone
                document.getElementById('nomeEndereco').value = series.nomeEndereco
                document.getElementById('anoNascimento').value = series.anoNascimento

                if (window.confirm("Você deseja atualizar cliente?")) {
                    document.getElementById('btnCadastrar').removeEventListener('click')
                    document.getElementById('btnCadastrar').addEventListener('click', atualizarSerie)
                    async function atualizarSerie() {
                        try{
                            const dadosEnviadosAtualizados = {
                                'nomeCliente' : document.getElementById('nomeCliente').value,
                                'numTelefone': document.getElementById('numTelefone').value,
                                'nomeEndereco' : document.getElementById('nomeEndereco'),value,
                                'anoNascimento' : document.getElementById('anoNascimento').value
                            }
                                const retorno = await fetch('${url}/${id}', {
                                    method: 'PUT',
                                    headers:{
                                        'Content-type':'application/json'
                                    },
                                    body: JSON.stringify(dadosEnviadosAtualizados)
                                });

                                if (retorno.ok) {
                                    alert("Cliente atualizada com sucesso!")
                                }else{
                                    alert('Cliente não pode ser atualizada ${retorno.status')
                                }
                                window.location.reload();
                                    
                                }catch (error){
                                    console.log(error);
                                }
                        }

                    }
                    
                });
                tdDelete.addEventListener('click', async () => {
                    const id = series.id

                    if (window.confirm("Você deseja realmente apagar esse cliente?")) {

                        try {
                            const retorno = await fetch(`${url}/${id}`, {
                                method: 'DELETE'
                            })

                            if (retorno.ok) {
                                alert('O cliente foi deletad0 com sucesso!')
                            } else {
                                alert(`Erro ao deletar cliente ${retorno.status}`)
                            }
                            
                        } catch (error) {
                            console.log(error);
                        }

                    }
                })
                
            tr.appendChild(nomeCliente)
            tr.appendChild(numTelefone)
            tr.appendChild(nomeEndereco)
            tr.appendChild(anoNascimento)
            tr.appendChild(div)
            div.appendChild(tdEdith)
            div.appendChild(tdDelete)
        
            listaSeries.appendChild(tr)
            
        });
        

}catch (error){
    console.log(error);
}


 }
getSeries()