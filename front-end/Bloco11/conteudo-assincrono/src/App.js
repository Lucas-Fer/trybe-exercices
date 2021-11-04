import React from "react";
import "./App.css";
import ChangeColorImage from "./components/ChangeColorImage.jsx";
import Header from "./components/Header";
// 1. Listar as cores ✅
// 2. Quadradinho de cor do lado do nome da cor 😜
// 3. Criar um input 💪
// 4. Armazenar dados do input 🤩
// 5. Filtrar as cores 👍
// 6. Adicionar a foto e fazer mudar a cor de acordo com a primeira cor da lista ✅
// Bônus - adicionar um componente em arquivo separado com props e state 🤩

class App extends React.Component {


  render() {
    return (
      <>
        <Header />
        <ChangeColorImage />
      </>
    );
  }
}

export default App;