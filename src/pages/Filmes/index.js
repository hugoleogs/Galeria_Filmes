
import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import api from '../../services/api'
import './styles.css'

function Filmes(){

    const {id} = useParams()
    const navigation = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "5e9635fe1a0d6c05f4f3bc3b5ed2fbbc",
                    languege: "pt-BR"
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log("Filme não encontrado!!!")
                navigation('/', { replace: true})
                return
            })
        }
        loadFilme()

        return () => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [navigation, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix")
        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id)

        if(hasFilme){
            toast.warn("ESSE FILME JÁ ESTA NA LISTA")
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("FILME SALVO COM SUCESSO!!!")
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10 </strong>
        
            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        
        </div>
    )
}

export default Filmes;