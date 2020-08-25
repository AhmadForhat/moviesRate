import React, { useEffect, useState } from 'react';
import CardModulos from '../../components/CardModulos'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'
import fetch from './fetch'

const anterior = (page, setPage) => {
    if(page !== 1){
        setPage(page - 1)
        window.scrollTo( 0, 0 )
    }
}

const proximo = (page, setPage) => {
    if(page !== 5){
        setPage(page+1)
        window.scrollTo( 0, 0 )
    }
}

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const state = {setIsLoading, setIsError, setMovies, page}
    useEffect(() => fetch(state), [page])
    if(isLoading) return <div style={{display:'flex', justifyContent:'center', margin:'0 auto', marginTop:'200px'}}><Spinner /></div>
    if(isError) return <h2>...Error</h2>
    return (
        <div style={{marginTop:'80px'}}>
            <CardModulos array={movies}/>
            <div style={{display:'flex', justifyContent:'space-around', width:'30%', margin:'0 auto', marginBottom:'40px'}}>
                <div style={{marginRight:'10px'}}>
                    <Button funcao={() => anterior(page, setPage)} type='form' title='Anterior'/>
                </div>
                <div style={{marginLeft:'10px'}}>
                    <Button funcao={() => proximo(page, setPage)} type='form' title='Proxima'/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard