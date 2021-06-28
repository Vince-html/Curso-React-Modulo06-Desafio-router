import React from 'react'
import '../styles/contato.scss';
import imagem from '../img/contato.jpg'
import Head from './Head';

export function Contato() {
  return (
    <section className="contato animeleft">
      <Head title="Contato" description="Entre em contato" />
      <img src={imagem} alt="maquina" />
      <div>
      <h1>Contato</h1>
      <ul className="dados">
        <li>hahaha@ahhaha</li>
        <li>9999999</li>
        <li>9999999</li>
      </ul>
      </div>
    </section>
  );
}

