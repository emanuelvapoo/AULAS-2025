const decryptId = (id) => {
    return parseInt(id,36)
}

const loadCharacter = () => {
  try{
    //request / response
    const res = await fetch(`${url}/${id}`)
    if(!res.ok){
      throw new Error('Erro ao carregar o personagem')
    }
    const data = await res.json()

    return data
  }catch(error){
    console.log(error)
  }
}

const loadAll = () => {
  const urlParams = new URLSearchParams(window.location.search)
  console.log(urlParams)
  const idParams = urlParams.get('id')
  console.log(idParams)

  if(idParams){
    console.log('ID não encontrado na url')
    return
  }

  const idDescryped = decryptId(idParams)
  console.log(idDescryped)
  const url = `https://rickandmortyapi.com/api/character`

  try{
    const character =loadCharacter(baseUrl, idDescryped)
    console.log(character)
  }catch(error){
    console.log(error)
  }
  
}
loadAll()

