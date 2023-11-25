import '../styles/Vantagens.scss'

export default function Vantagens() {

    return (
        <>
            <div className="vantagens">
                <h3>Vantagens</h3>
                <section id="vantagens">
                    <div>
                        <h3>1</h3>
                        <p><b>Comunicação Direta e Eficiente:</b><br/></p>
                        Facilita uma comunicação direta entre pacientes e profissionais de saúde. <br />
                        Os usuários podem postar pedidos detalhados, promovendo uma comunicação clara sobre suas necessidades e a gravidade da situação.               
                    </div>
                    <div>
                        <h3>2</h3>
                        <p><b>Resposta Rápida a Situações de Saúde:</b><br />
                        Proporciona uma resposta rápida a emergências e necessidades de saúde. <br />
                        Profissionais de saúde cadastrados recebem notificações em tempo real sobre os pedidos de ajuda, permitindo uma intervenção rápida.
                        </p>                    
                    </div>
                    <div className='Vantagem3'>
                        <h3>3</h3>
                        <p><b>Integração com a HapVida:</b> <br />
                        Potencial acesso a informações médicas relevantes e histórico do paciente.<br/>
                        A parceria com a HapVida sugere uma possível integração, o que pode melhorar a coordenação do cuidado, oferecendo benefícios adicionais aos usuários.</p>
                    </div>
                </section>
            </div>
        </>
    )
}
