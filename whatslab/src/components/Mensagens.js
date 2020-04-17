import React from 'react';
import styled from 'styled-components'

const MsgContainer = styled.div `
    width: 50vw;
    display: flex;
    
`



class Mensagens extends React.Component {
    render () {
        return (
            <MsgContainer>
                <p>{this.props.usuario} : </p>
                <p>{this.props.conteudoMensagem}</p>
            </MsgContainer>
        )
    }
}

export default Mensagens