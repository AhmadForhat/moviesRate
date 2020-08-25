import React from 'react';
import { useMediaPredicate } from "react-media-hook";
import {containerWeb, containerMobile} from './style'
import pauloCoffe from './image/pablo-coffee-break.png'
import Button from '../Button'

const Chamada = () => {
    const webLayout = useMediaPredicate("(min-width: 600px)")
    const marginBottom = webLayout ? '80px' : '20px'
	return (
        <div style={webLayout ? containerWeb : containerMobile}>
            <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', width:'100%'}}>
                <div style={{alignSelf:'center', maxWidth:'400px', width:'80%'}}>
                    <h2 style={{fontSize:'32px'}}>Está em dúvida qual filme quer assistir?</h2>
                    <p>Entre no nosso site, avalie e veja os melhores filmes e recomendações</p>
                    <Button type='link' title='Cadastre-se' funcao='/cadastro'/>
                </div>
                <img src={pauloCoffe} style={{width:'40%', maxWidth:'600px', minWidth:'300px', marginTop:'30px'}} alt="imagem de chamada inicial"/>
            </div>
        </div>
    )
}

export default Chamada