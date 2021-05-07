import React from 'react';
import Mensagens from "./components/Mensagens";
import styled from 'styled-components'

const ContainerBody = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  #container-conteudo {
    max-width: 50vw;
    min-height: 100vh;
    background-color: rgb(229, 221, 213);
    border-right: 1px solid black;
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    justify-content: space-between;
  }

  #lista-de-mensagens {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    flex: 1 1 0%;
  }

  #formulario {
    width:100%;
    height: 8vh; 
  }

  #usuario {
    width: 8vw;
    height: 5vh;
    margin: 1vh;
    border-radius: 5px;
    border: none;
  }

  #mensagem {
    width: 30vw;
    height: 5vh;
    margin: 1vh;
    border-radius: 5px;
    border: none;
  }

  button {
    width: 8vw;
    height: 5vh;
    margin: 1vh;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    font-size: 20px;
  }
`

class App extends React.Component {
  state = {
    //Array de objetos que irá guardar as mensagens.
    mensagens: [],

    //Variáveis que guardam os valores dos inputs.
    inputUsuario: "",
    inputConteudoMensagem: ""
  }

  enviarMensagem = () => {
    //Objeto que vai armazenar uma nova mensagem
    let novaMensagem = {
      usuario: this.state.inputUsuario,
      conteudoMensagem: this.state.inputConteudoMensagem
    }

    /*copia o array de mensagens para exibir o que está nela e adiciona mais uma
    pessoa*/
    let novoMensagens = [...this.state.mensagens, novaMensagem]

    //Exibe as novas mensagens
    this.setState({ mensagens: novoMensagens })

    //limpa os campos do formulário
    this.setState({
      inputUsuario: "",
      inputConteudoMensagem: ""
    })
  }

  onChangeInputUsuario = (event) => {
    //Quando algo for digitado vai aparecer no input de usuário
    this.setState({ inputUsuario: event.target.value })
  }

  onChangeinputConteudoMensagem = (event) => {
    //Quando algo for digitado vai aparecer no input de mensagem
    this.setState({ inputConteudoMensagem: event.target.value })
  }

  render() {
    const ListaDeMensagens = this.state.mensagens.map(itemMensagem => {
      return (
        <Mensagens key={itemMensagem.usuario}
          usuario={itemMensagem.usuario}
          conteudoMensagem={itemMensagem.conteudoMensagem}
        />
      )
    })

    return (
      <ContainerBody>
        <div id="container-conteudo">
          <div id="lista-de-mensagens">{ListaDeMensagens}</div>
          <div id="formulario">
            <input 
              id="usuario"
              value={this.state.inputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />

            <input
              id="mensagem"
              value={this.state.inputConteudoMensagem}
              onChange={this.onChangeinputConteudoMensagem}
              placeholder={"Mensagem"}
            />

            <button onClick={this.enviarMensagem}>Enviar</button>
          </div>
        </div>
      </ContainerBody>
    )
  }
}

export default App;