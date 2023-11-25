import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { VscSignOut as Sair} from "react-icons/vsc";

import '../styles/Cabecalho.scss';

export default function Cabecalho() {
    const  Rota = useLocation();
    const navigate = useNavigate();

    const obJUser = JSON.parse(sessionStorage.getItem('data-user'));

    const handleLogout = () => {
        sessionStorage.removeItem('token-user');
        sessionStorage.removeItem('data-user');
        navigate('/login');
    };

    return (
        <>
            <header className="cabecalho">
                {obJUser ? (
                    <>
                        <div className="BoasVindas">
                            <p>{`Olá, ${obJUser.nome}!`}</p>
                        </div>
                        <div>
                            <button onClick={handleLogout} className="btnLogout">
                                <Sair/>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="BoasVindas">
                        <p>Engenharia de Software - 1ESPF - GLOBAL SOLUTIONS</p>
                    </div>
                )}
            </header>
        </>
    );
}
