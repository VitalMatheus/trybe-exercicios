import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render () {
    return (
      <div className ="content">
        {conteudos.map((index) => (
          <div key={index.conteudo} className='card'>
            <p>{`O conteúdo é: ${index.conteudo}`}</p>
            <p>{`O status é: ${index.status}`}</p>
            <p>{`O bloco é: ${index.bloco}`}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Content;