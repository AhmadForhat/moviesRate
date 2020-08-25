import React, {useEffect, useState} from 'react'
import sendToBackend from './sendToBackend'
import fetch from './fetch'
import Button from '../Button'
import imageValidation from './image/marginalia-location-access.png'

const Validation = () => {
	const [redirect, setRedirect] = useState(false)
	const [token, setToken] = useState('')
	const [passSession, setPassSession] = useState(false)
	const [session, setSession] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const state = {redirect, setRedirect,token, setToken,passSession, setPassSession,session, setSession,isLoading, setIsLoading}
    useEffect(() => fetch(state), [])
		if(!session && token) return (
			<div style={{display:'flex', flexDirection:'column',justifyContent:'space-around', width:'80%', minWidth:'300px', margin:'0 auto', alignItems:'center', backgroundColor:'white',shadow:'2px 2px 2px 1px #FAEAFF',boxShadow:'0 4px 6px 3px #B3B3B3',marginTop:'80px',height:'70%'}}>
				<img alt="imagem" src={imageValidation} style={{width:'50%', minWidth:'250px'}}/>
				{!redirect ? (
					<div style={{width:'40%', marginBottom:'20px'}}>
						<Button funcao={() => {
							window.open(`https://www.themoviedb.org/authenticate/${token}`)
							setRedirect(true)
						}} type="form" title="Validar"/>
					</div>
				):(
					<div style={{width:'40%', marginBottom:'20px'}}>
						<Button funcao={() => {sendToBackend(state)}} type="form" title="Confirmado"/>
					</div>
				)}
			</div>
		)
		return null
}

export default Validation