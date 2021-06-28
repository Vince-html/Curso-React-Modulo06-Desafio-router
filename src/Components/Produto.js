import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Produto.scss'
import Head from './Head';

export const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [ loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduto(url){
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro){
        setErro ('Um erro ocorreu')
      } finally {
        setLoading(false);
      }



    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)

  }, [id])

  if(loading) return <div className="loading"></div>
  if(erro) return <p>{erro}</p>
  if (produto === null) return null;

  return (
    <section className="produto-ativos animaleft">
      <Head title={`Ranke | ${produto.nome}`} description ={`Ranke | ${produto.nome}`} />
        <div>
          {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
        </div>     
        <div>
          <h1>{produto.nome}</h1>
          <span>R$ {produto.preco}</span>
          <p>{produto.descricao}</p>

        </div>
    </section>
  )
}


