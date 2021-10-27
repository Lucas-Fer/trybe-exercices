import React, { Component } from "react";

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

class Content extends Component {
  render() {
    return (
      <section>
        {conteudos.map((element) => {
          return (
            <ul key={element.conteudo} >
              <li><strong>Conteúdo:</strong> {element.conteudo}</li>
              <li><strong>Bloco:</strong> {element.bloco}</li>
              <li><strong>Status:</strong> {element.status}</li>
            </ul>
          );
        })}
      </section>
    );
  }
}

export default Content;