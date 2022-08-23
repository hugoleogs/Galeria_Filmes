import axios from 'axios'

//5e9635fe1a0d6c05f4f3bc3b5ed2fbbc Chave da API (v3 auth)
//Exemplo de Requisição de API
//https://api.themoviedb.org/3/movie/550?api_key=5e9635fe1a0d6c05f4f3bc3b5ed2fbbc

//Base URL: https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api