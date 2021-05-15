const Tips = () => {
    return(
        <div className="row">
            <div className="col-md-12">
                <p>
                    O "BOT" jogador 2 oferecerá no início cartas aleatórias para troca.
                </p>
                <p>
                    <strong>Inventário:</strong><br /> 
                    -O invetário do jogador inicia com 20 cards aleatórios<br />
                    -As informações são apenas para visualização.
                </p>
                <p>
                    <strong>Área de troca:</strong><br /> 
                    -Esse é o local onde você adiciona seu card para troca. <br />
                    -Você adiciona um card clicando no botão <button className="btn btn-secondary btn-sm">SELECIONAR CARTA <i className="fa fa-plus" aria-hidden="true"></i></button>.<br /> 
                    -Nesse momento será apresentada uma lista com todos os cards do seu inventário, escolha o card que deseja trocar e clique no botão <button className="btn btn-secondary btn-sm">ADICIONAR CARTA <i className="fa fa-plus" aria-hidden="true"></i></button>, o card será adicionado a área de troca.<br />
                    -Para remover um card clique no ícone <i className="fa fa-times-circle" aria-hidden="true"></i> sobre o card.
                </p>
            </div>                    
        </div> 
    )
}

export default Tips;