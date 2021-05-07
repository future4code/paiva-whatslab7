import React from 'react';
import styled from 'styled-components'

const MsgContainer = styled.div `
    max-width: 20vw;
    height: auto;
    border: none;
    border-radius: 5px;
    background-color: #FFF;
    margin: 2vw;
    display: flex;

    #usuario {
        font-weight: bold;
    }

    #mensagem {
        text-align: justify;
    }
`

class Mensagens extends React.Component {
    render () {
        return (
            <MsgContainer>
                <p id="usuario">{this.props.usuario}</p>
                <p id="mensagem">{this.props.conteudoMensagem}</p>
            </MsgContainer>
        )
    }
}

export default Mensagens