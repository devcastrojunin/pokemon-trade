const Tips = () => {
    return(
        <div className="row mt-4">
            <div className="col-md-12">
                <div className="alert alert-info" role="alert">
                    <h4 className="alert-heading">Dicas</h4>
                    <hr />
                    <p>
                        <strong>Inventário:</strong><br /> 
                        -O invetário do jogador inicia com 50 cards aleatórios, tendo como limite máximo 100 cards. Caso queira adicionar mais cards clique no botão <i>Adicionar</i>. <br />
                        -Você pode visuaalizar as informações e detalhes do pokemon clicanco no ícone <i className="fa fa-eye" aria-hidden="true"></i>
                    </p>
                    <p>
                        <strong>Área de troca:</strong><br /> 
                        -Esse é o local onde você adiciona seu card para troca. <br />
                        -Você adiciona um card clicando no ícone <i className="fa fa-plus" aria-hidden="true"></i>. Nesse momento será apresentada uma lista com todos os cards do seu inventário, escolha o card que deseja trocar e clique em <i>Add</i>, o card será adicionado a área de troca. Se desejar adicionar mais cards para troca, repita a operação. <br />
                        -Para remover um card clique no ícone <i className="fa fa-times-circle" aria-hidden="true"></i> sobre o card.
                    </p>
                </div>
            </div>                    
        </div> 
    )
}

export default Tips;