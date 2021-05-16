const Content = ({ inventory, title }) => {
    return (
        <>
            <div className="col-md-12 mb-2 d-flex justify-content-between align-items-center">
                <div>
                    <h3 className="mb-0">{title}</h3>
                    <p>Itens apenas para visualização</p>
                </div>
                <div>
                    Total de cartas: <strong>{inventory.length}</strong>
                </div>
            </div>
            <div className="col-12 mb-4 list">
                <div className="row">
                    {inventory.map((pokemon, index) => {
                        return (
                            <div key={index} className="col-2 mb-2 card__item">
                                <div className="card">
                                    <div className="card__content">
                                        <figure className="d-flex justify-content-center align-items-center">
                                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                        </figure>
                                        <div className="card-body">
                                            <div className="pokeName">
                                                <h4 className="card-title text-center">{pokemon.name}</h4>
                                            </div>
                                            <hr />
                                            <p>
                                                <strong>Altura: </strong>{pokemon.height} <br />
                                                <strong>Peso: </strong>{pokemon.weight} <br />
                                                <strong>Xp: </strong>{pokemon.base_experience}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        )
                    })
                    }
                </div>
            </div>
        </>
    );
}

export default Content;