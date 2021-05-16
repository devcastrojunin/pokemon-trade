const Tips = () => {
    return(
        <div className="row">
            <div className="col-md-12">
                <p>
                    O jogador 2 oferecerá cards aleatórios para troca no início da partida.
                </p>
                <p>
                    <strong>Inventário:</strong><br /> 
                    -O seu invetário inicia com 20 cards aleatórios.
                </p>
                <p>
                    <strong>Área de troca:</strong><br /> 
                    -Esse é o local onde você adiciona seu card para troca. <br />
                    -Você adiciona um card clicando no botão "<strong><i>SELECIONAR CARTAS PARA TROCA</i></strong>".<br /> 
                    -Nesse momento, será apresentada uma lista com todos os cards do seu inventário. Escolha o card que deseja trocar e clique no botão "<strong><i>ADICIONAR CARTA</i></strong>", o card será adicionado a área de troca.<br />
                    -Para remover um card da área, clique no ícone <i className="fa fa-times-circle" aria-hidden="true"></i> sobre o card.
                </p>
            </div>                    
        </div> 
    )
}

export default Tips;