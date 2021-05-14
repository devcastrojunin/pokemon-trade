import React, {useContext} from "react";
import { AppContext } from "../../context/appContext";

const ChooseBox = () => {
    const [
        inventoryPlayerOne, 
        setInventoryPlayerOne,
        inventoryPlayerTwo, 
        setInventoryPlayerTwo,
        gameStatus, 
        setGameStatus
    ] = useContext(AppContext);

    return(
        <>
            <div className="box-card">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <h3>Área de troca jogador 1</h3>
                    </div>
                    <div className="col-4 mb-4 card__item">
                        <div className="card">
                            <div className="card-body">
                                <h5 data-bs-toggle="modal" data-bs-target="#exampleModal" className="card-title">Card title</h5>                                
                            </div>
                        </div>        
                    </div>
                    <div className="col-4 mb-4 card__item">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>                                
                            </div>
                        </div>        
                    </div>
                    <div className="col-4 mb-4 card__item">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>                                
                            </div>
                        </div>        
                    </div>
                    <div className="col-4 mb-4 card__item">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>                                
                            </div>
                        </div>        
                    </div>
                    <div className="col-4 mb-4 card__item">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>                                
                            </div>
                        </div>        
                    </div>
                    <div className="col-4 mb-4 card__item">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>                                
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseBox;