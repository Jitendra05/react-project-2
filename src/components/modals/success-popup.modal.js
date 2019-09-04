import React from 'react';
import ReactModal from 'react-modal';

const SuccessModal = (props) => (
        <ReactModal
            isOpen={props.isVisible}
            onRequestClose={props.closePopup}
            closeTimeoutMS={300}
            className="modal-success"
            id="success"
        >
            <h3 className="modal__title">{props.title}</h3>
            {props.message && <p className="modal__body">{props.message}</p>}
        </ReactModal>
    );

    // ReactModal.setAppElement('#app');
   
export default SuccessModal;