import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import { ImTwitter } from 'react-icons/im'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoYoutube } from 'react-icons/io'
import logo from '../assets/footer/descarga.png'
import '../style/footer.scss'



const Footer = () => {
    return (
        <footer>

            
            <div className='container-footer'>
                <div className='box-footer nav justify-content-end'>
                    <img src={logo} width={200} alt="" />
                </div>

                <div className='box-footer nav justify-content-end'>
                    <a href='https://www.facebook.com/bumerancom/' target="_blank"><GrFacebook className='rrss' /></a>
                </div>

                <div className='box-footer nav justify-content-end'>
                    <a href='https://twitter.com/bumeran' target="_blank"><ImTwitter className='rrss' /></a>
                </div>

                <div className='box-footer nav justify-content-end'>
                    <a href='https://www.instagram.com/bumeranarg/' target="_blank"><FaInstagramSquare className='rrss' /></a>
                </div>

                <div className='box-footer nav justify-content-end'>
                    <a href='https://www.linkedin.com/company/bumeran.com/' target="_blank"><BsLinkedin className='rrss' /></a>
                </div>

                <div className='box-footer nav justify-content-end'>
                    <a href='https://www.youtube.com/channel/UC3fIXQKvWcYwCd8f0J7aiSQ' target="_blank"><IoLogoYoutube className='rrss' /></a>
                </div>
            </div>

            <div className='box-copyright'>
                <hr />
                <p> <b>Bumeran</b> © 2022 - Todos los derechos reservados  </p>
            </div>
        </footer >
    )
}

export default Footer
