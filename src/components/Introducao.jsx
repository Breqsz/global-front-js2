import '../styles/Introducao.scss'

export default function Introducao() {

    return (
        <>
            <div className="introducao">
                <section id="introducao">
                <div className='video-container'>
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/gywLK25M79w" 
                title="HealthConnect" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                </div>
                    <h1 id="Titulo-health">HealthConnect</h1>
                    <p id ="texto-health">
                    A HealthConnect é um aplicativo inovador feito em parceria com a HapVida, projetado para facilitar a comunicação direta entre pacientes e profissionais de saúde. A proposta central do aplicativo é permitir que os usuários postem pedidos de ajuda, detalhando suas necessidades específicas e a gravidade da situação, proporcionando uma maneira eficaz e rápida de conectar-se com profissionais de saúde cadastrados.
                    </p>
                    
                <a href="https://www.hapvida.com.br/site/">
                <img src="/src/static/hapvida-logo-0.png" alt="Logo HapVida" />
                </a>
                </section>
            </div>
        </>
    )
}
