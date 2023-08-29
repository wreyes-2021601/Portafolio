import React from 'react'

export const Home = () => {
    return (
        <>
            <section id="sinopsis" className="knowledge">
                <div className="knowledge__container container">
                    <div className="knowledge__texts">
                        <h2 className="subtitle">Bienvenidos!!</h2>
                        <p className="knowledge__paragraph">
                            Me complace tener la oportunidad de compartir <br /> mis intereses y conocimientos contigo.
                            En este sitio encontrarás <br /> información  sobre mí, mi experiencia y mis habilidades.
                            <br />Espero que disfrutes navegando por mi sitio web y que encuentres la información que estás buscando.
                            Si tienes alguna pregunta <br /> o
                            comentario, no dudes en ponerte en contacto conmigo.<br /> ¡Gracias por visitar mi sitio web!
                        </p>
                    </div>
                    <figure className="knowledge__picture">
                        <img src="../src/img/home1.jpg" className="knowledge__img" />
                    </figure>

                </div>
            </section>
        </>
    )
}
