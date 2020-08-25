import React, {useEffect, useState}  from 'react'
import moment from 'moment'
import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'
import Input from '../../components/Input'
import Button from '../../components/Button'
import fetch from './fetch'
import sendToBackend from './sendToBackend'

const CursoIngles = ({filmId}) => {
    const navbarArrayLogado = [{title:'Validação', href:'/validation'}, {title:'Logout', href:'/logout'}]
    const [movieDetails, setMovieDetails] = useState([])
    const [enviado, setEnviado] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [nota, setNota] = useState('')
    const state = {setMovieDetails, filmId, setIsLoading, setIsError}
    useEffect(() => fetch(state),[])
    if(isError) return <h2>Error</h2>
    if(isLoading) return <div style={{display:'flex', justifyContent:'center', margin:'0 auto', marginTop:'200px'}}><Spinner /></div>
    const {adult, genres, homepage, original_language, original_title, overview, poster_path, release_date, title, vote_average, vote_count} = movieDetails
    const session_id = localStorage.getItem('session_id')
    const objBack = {filmId, session_id, setEnviado}
    return (
        <>
            <Navbar links={navbarArrayLogado}/>
            <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'80px'}}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='imagem do poster' style={{width:'40%', minWidth:'300px', maxWidth:'350px'}}/>
                <div style={{display:'flex', flexDirection:'column', width:'60%', maxWidth:'800px', marginTop:'20px'}}>
                    <a href={homepage} target="_blank">{original_title}</a>
                    <h2>{!original_title === title ? title : ''}</h2>
                    <h2>{adult ? 'Filme Adulto' : 'Filme não Adulto'}</h2>
                    <h2>Língua: {original_language}</h2>
                    <h2>Genero: {genres[0].name}</h2>
                    <h2>{overview}</h2>
                    <h2>Lançamento: {moment(release_date).format('DD/MMM/YY') || 'Não lançou ainda'}</h2>
                    <h2>{vote_average}</h2>
                    <h2>{vote_count}</h2>
                    {!enviado ? (
                        <div style={{display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', marginBottom:'60px'}}>
                        {session_id !== "undefined" ? (
                            <>
                                <Input title="Avaliação" type="text" placeholder="0 à 10" valor={nota} setValor={setNota}/>
                                <div style={{marginTop:'16px', marginLeft:'10px'}}>
                                <Button type='form' title='Avaliar' funcao={() => sendToBackend(objBack)}/>
                                </div>
                            </>
                        ):(
                            <a href="/validation">Valide sua conta pra poder Avaliar</a>
                        )}
                    </div>
                    ):(
                        <h2 style={{marginBottom:'40px'}}>Avaliação enviada com sucesso!!</h2>
                    )}
                </div>
            </div>
        </>
    )
}

export default CursoIngles