const ModalInfo = ({children}) => {
    return (
        <>            
            <div className="modal fade" id="modalInfo" tabIndex="-1" aria-labelledby="modalInfoLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalInfoLabel">Dicas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button id="closeModal" type="button" className="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalInfo;