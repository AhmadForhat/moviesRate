import React, { useState, useEffect } from 'react';
import imagemEstudando from './image/estudandoEmCasa.png'
import imageConforto from './image/conforto.png'
import {boxContainer, subTitle, body, frase, butao, butaoAtivo} from './style'

const Slide = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const array = [{src:imagemEstudando, alt:'imagem mulher estudando', subTitle:'Estude sem sair do quarto!', texto:'Nosso plano de estudos tem como objetivo fazer com que os alunos consigam acompanhar todo o conteudo sem sair do conforto da sua casa, com a qualidade de se ter uma aula presencial!'},{src:imageConforto, alt:'imagem mulher estudando', subTitle:'Como funciona o curso', texto:'Utilizamos uma metodologia voltada a gamificação, onde seu progresso vai sempre de baixo para cima, até atingir seus objetivos, fazemos de tudo para que sua experiência online seja o mais confortável possível'},{src:imageConforto, alt:'imagem mulher estudando', subTitle:'Como funciona o curso', texto:'Utilizamos uma metodologia voltada a gamificação, onde seu progresso vai sempre de baixo para cima, até atingir seus objetivos, fazemos de tudo para que sua experiência online seja o mais confortável possível'}]
    return (
        <div style={boxContainer}>
            <div style={body}>
                <img src={array[slideNumber].src} alt={array[slideNumber].alt} style={{width:'30%', minWidth:'280px'}}/>
                <div style={frase}>
                    <h2 style={subTitle}>{array[slideNumber].subTitle}</h2>
                    <p style={{width:'90%', minWidth:'220px'}}>{array[slideNumber].texto}</p>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                {array.map((item, index) => {
                    return (
                        <button key={index} style={index === slideNumber ? butaoAtivo : butao} onClick={() => setSlideNumber(index)}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Slide