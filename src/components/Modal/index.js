const Modal = ({data}) => {

    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul className="list-group">
                                {data.map((pokemmon, index) => {
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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;