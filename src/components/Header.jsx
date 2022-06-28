import React from 'react'
import img1 from '../assets/header/img1.png'
import img2 from '../assets/header/img2.jpeg'
import img5 from '../assets/header/img5.png'
import Content from '../components/Content.jsx'
import CardContenido from '../components/CardsContenido'
import '../style/header.scss'


const Header = () => {

    /* Dar estilos */
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block contenedor-titulo">
                            <h1 id='title-color-1'>Estrategías para liderar
                                <br />un equipo y obtener
                                <br />
                                buenos resultados</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block contenedor-titulo-2">
                            <h1 id='title-color-2'>¿Cómo identificar en un aviso
                                <br /> los elementos claves que
                                <br />busca el reclutador?</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block contenedor-titulo-3">
                            <h1 id='title-color-3'>Encuentra y elige
                                <br />a los mejores reclutadores</h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Content />
            <CardContenido />
        </div>
    )
}

export default Header