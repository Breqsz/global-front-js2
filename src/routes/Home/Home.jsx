import Conteudo from "../../components/Conteudo"
import Introducao from "../../components/Introducao"
import Vantagens from "../../components/Vantagens"
import '/src/styles/Home.scss';

export default function Home() {

    if (sessionStorage.getItem("token-user")) {
        return (
            <div className="container">
                <div className="home-container">
                    <Introducao />
                    <Conteudo />
                    <Vantagens />
                    
                </div>
            </div>
        )
    } else {
        window.location = "/login";

    }
}

