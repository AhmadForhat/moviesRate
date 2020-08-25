import React from 'react';
import {container} from './style'
import Button from '../Button'

const CardModulos = ({array}) => {
    if(array){
        return (
            <div style={{marginBottom:'50px', display:'flex', flexWrap:'wrap'}}>
            {array.map((modulo,index) => {
                const {id,title, original_title, description, posterImg} = modulo
                return (
                    <React.Fragment key={index}>
                    <div style={container('white', 'black')}>
                        <img src={posterImg} alt={`poster ${title}`} style={{width:'20%', marginLeft:'10px'}}/>
                        <div style={{display:'flex', flexDirection:'column', width:'70%'}}>
                            <h2>{original_title}</h2>
                            <p>{title}</p>
                            <p style={{padding:'10px'}}>{description}</p>
                            <div style={{width:'30%', display:'flex', margin:'0 auto'}}>
                                <Button type='link' title='Saiba Mais' funcao={`/details/${id}`}/>
                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                )
            })}
            </div>
        )
    }else{
        return (
            <h2>Nenhum Curso registrado!</h2>
        )
    }
}

export default CardModulos