import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/37915875?s=460&u=594fc6a97da69db9cd0e38e85e8ea44efa5952e7&v=4" alt="Guilherme Pessoa" />
                <div>
                    <strong>Guilherme Pessoa</strong>
                    <span>Node.js</span>
                </div>
            </header>

            <p>
                Estusiasta em programção
    <br /><br />
    Apaixonado por reclamar das coisas e te ensinarei tudo que você já sabe !! XD
</p>

            <footer>
                <p>
                    Preço/hora
        <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato via whatsapp" />
        Entrar en contato
    </button>
            </footer>
        </article>
    )
}
export default TeacherItem;