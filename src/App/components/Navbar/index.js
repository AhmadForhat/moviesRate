import React, { useState } from 'react';
import { useMediaPredicate } from "react-media-hook";
import {Link} from 'wouter'
import logoBranco from './image/kpmg-logo.png'
import menu from './image/menu-24px.png'
import close from './image/close-24px.png'
import {container, linkStyle, containerMobile} from './style'

const Navbar = ({links}) => {
    const [hamburger, setHamburger] = useState(false);
    const webLayout = useMediaPredicate("(min-width: 600px)")
	return (
        <div style={{height:'100%'}}>
            {
                webLayout ? (
                    <div style={container}>
                        <a href="/"><img src={logoBranco} alt="Logo" style={{width:'90px', margin:'10px'}}/></a>
                        <div style={{display:'flex'}}>
                            {links.map((link, index) => {
                                return (
                                    <Link key={index} href={link.href}>
                                        <a style={linkStyle}>{link.title}</a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                ):(
                    hamburger ? (
                        <>
                        <div style={containerMobile}>
                            <a style={{color:'white', position:'fixed', top:'0'}} onClick={() => setHamburger(false)}><img src={close} alt="Fechar menu" style={{width:'20px', margin:'10px'}}/></a>
                            <a href="/"><img src={logoBranco} alt="Logo" style={{width:'70px', margin:'10px auto', marginTop:'40px'}}/></a>
                            <div style={{display:'flex', flexDirection:'column', marginTop:'40px'}}>
                                {links.map((link,index) => {
                                    return (
                                        <Link key={index} href={link.href}>
                                            <a style={linkStyle}>{link.title}</a>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        </>
                    ):(
                        <div>
                            <a style={{overflow: 'hidden',position:'fixed',top:0}} onClick={() => setHamburger(true)}><img src={menu} alt="Menu Hamburger" style={{width:'30px', margin:'5px'}}/></a>
                        </div>
                    )
                )
            }   
        </div>
	)
}

export default Navbar