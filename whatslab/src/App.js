import React from 'react';
import Mensagens from "./components/Mensagens";
import styled from 'styled-components'

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

  render () {
    const ListaDeMensagens = this.state.mensagens.map(itemMensagem => {
      return (
        <Mensagens key = {itemMensagem.usuario}
          usuario = {itemMensagem.usuario}
          conteudoMensagem = {itemMensagem.conteudoMensagem}
        />
      )
    })

    return (
      <div>
        <div>{ListaDeMensagens}</div>
        <div>
          <input 
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />

          <input 
            value={this.state.inputConteudoMensagem}
            onChange={this.onChangeinputConteudoMensagem}
            placeholder={"Mensagem"}
          />

          <button onClick= {this.enviarMensagem}>Enviar</button>
        </div>
      </div>
    )
  }
}

export default App;