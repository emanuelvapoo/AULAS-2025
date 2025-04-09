import express from 'express'

const app = express()

//Obrigatorio para aceitar JSON()
app.use(express.json())
/** Requisições
 * 1º - Métodos
 * 1.1 - GET -> busca/lista dados 
 * 1.2 - POST -> Criar um recurso/dados
 * 1.3 - PUT -> Atualizar recurso/dados
 * 1.4 - DELETE -> Deletar recurso/dados
 * 1.5 - PATCH -> Atualizar UMA informação
 * 2º - Receber Informações
 * 2.1 - Query Params -> Filtros
 * 2.1.1. - http://exemplo.com/projetos?nome=Web&author=Emanuel
 * 2.2 - Route Params -> Identificar Recurso
 * 2.2.1. - https://exemplo.com/projetos/30
 *2.3 - Body params -> {obj JSON}
 * 2.3.1 - {nome: Emanuel, idade:17}
 * 3. Status Code HTTPS
 * 3.1 - 100 -> Informativo 
 * 3.2 - 200 -> TUDO OK
 * 3.3 - 300 -> Recurso movido
 * 3.4 - 400 -> Erro do cliente
 * 3.5 - 500 -> Erro do Servidor
    query route  / projetos&nome="Emanuel"
 */   

app.get('/projetos', (request, response) =>{
    const {titulo, autor} = request.query
    console.log(titulo, autor)
    response.status(200).json(['Projeto 01', 'Projeto 02'])
})

app.post('/projetos', (request, response)=>{
    response.status(201).json(['Projeto 01', 'Projeto 02', 'Projeto 3'])
})

app.put('/projetos', (request, response)=>{
    response.status(200).json(['Projeto 02', 'Projeto 03'])
})

//Recebr informação por rota  /projetos/12
app.delete('/projetos/:id', (request, response)=>{
    response.send('Rota DELETE')
}) 


app.listen(3333, ()=>{
    console.log('Servidor iniciado em http://localhost:3333')
})


//TEMPORADA REGULAR
app.get('/api/PlayerDataAdvanced/query', (request, response) =>{
  console.log("mostra os números da pesquisa do jogador")
})


app.get('/api/PlayerDataAdvanced/name{palyer name}', (request, response) =>{
  console.log("Obtem dados especificos de um jogador pelo nome")
})

app.get('/api/PlayerDataAdvanced/season{season}', (request, response) =>{
  console.log("Obtem dados especificos de um jogador em uma temporada")
})

app.get('/api/PlayerDataAdvanced/playerid{playerId}', (request, response) =>{
  console.log("Obtem dados de um jogador ")
})

app.get('/api/PlayerDataAdvanced/team{team}', (request, response) =>{
  console.log("Obtem dados de todos os times")
})

app.get('/api/PlayerDataAdvanced/count', (request, response) =>{
  console.log("Testa a conexão com o banco de dados e recupera a contagem de jogadores")
})


//DEPOIS DOS PLAYOFF
app.get('/api/PlayerDataAdvancedPlayoffs/query', (request, response) =>{
  console.log("Consulta parametros dos jogadores que vão aos playoffs")
})

app.get('/api/PlayerDataAdvancedPlayoffs/query', (request, response) =>{
  console.log("Consulta parametros dos jogadores que vão aos playoffs")
})
