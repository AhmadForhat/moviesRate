import React, { useState } from 'react';
import { useMediaPredicate } from "react-media-hook";
import { motion } from 'framer-motion'
import {containerWeb, containerMobile} from './style'
import imgChamada from './image/pessoaChamada.png'
import Button from '../Button'

const Chamada = () => {
    const webLayout = useMediaPredicate("(min-width: 600px)")
	return (
        <div style={webLayout ? containerWeb : containerMobile}>
            <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                <div style={{alignSelf:'center'}}>
                    <h2 style={{fontSize:'40px'}}>Está em dúvida qual filme quer assistir?</h2>
                    <p>Entre no nosso site, avalie e veja os melhores filmes e recomendações</p>
                </div>
                <img src={imgChamada} style={{width:'40%', maxWidth:'300px'}} alt="imagem de chamada inicial"/>
            </div>
            <Button type='link' title='Cadastre-se' funcao='/cadastro'/>
        </div>
    )
}

export default Chamada