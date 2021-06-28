# React - Modulo 06 - Origamid

Demonstração <br>
<a href="https://curso-react-m06.vercel.app/"><strong>Demonstração</strong></a>

Desenvolvido em React, para o desafio de Router , do curso react-modulo 06.

Implementações utilizadas para desenvolver as paginas. 

<a href="https://reactrouter.com/web/guides/quick-start"> React Router Dom </a>

Usado também , do proprio react, useState, useEffect. 

Foi feito um fecth de uma api , própria do curso, para implementar os produtos na página. 
```
  useEffect(() =>{
    fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then(r => r.json())
    .then(json =>setProdutos(json));
  }, []);
  ```

Usei também para facilitar a stilização das páginas o <br>
<a href="https://sass-lang.com/">Sass no modo de Scss</a>

Qualquer duvida podem me chamar.


