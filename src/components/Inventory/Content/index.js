const Content = ({ inventory, title }) => {
    return (
        <>
            <div className="col-md-12 mb-2">
                <h3 className="mb-0">Inventário {title}</h3>
                <p>Itens apenas para visualização</p>
            </div>
            <div className="col-12 mb-4 list">
                <ul className="list-group">
                    {inventory.map((pokemmon, index) => {
                        return (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <figure>
                                        <img src={pokemmon.sprites.front_default} alt={pokemmon.name} />
                                    </figure>
                                    <div className="pokeInfos">
                                        <div className="pokeName">
                                            <h4>
                                                {pokemmon.name}
                                            </h4>
                                        </div>
                                        <p>
                                            <strong>Altura: </strong>{pokemmon.height} | <strong>Peso: </strong>{pokemmon.weight} | <strong>Xp: </strong>{pokemmon.base_experience}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </>
    );
}

export default Content;