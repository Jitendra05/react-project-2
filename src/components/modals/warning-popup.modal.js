import React from 'react';
import ReactModal from 'react-modal';

const WarningModal = (props) => (
        <ReactModal
            isOpen={props.isVisible}
            onRequestClose={props.closePopup}
            closeTimeoutMS={300}
            className="modal"
            id="warning"
        >
            <h3 className="modal__title">{props.title}</h3>
            {props.message && <p className="modal__body">{props.message}</p>}
            <button 
                onClick={props.closePopup}
                className="button"
            >
            Cancel
            </button>
            <button 
                className="button"
                onClick={props.okPopup}
                className="button"
            >
            ok
            </button>
        </ReactModal>
    );

    // ReactModal.setAppElement('#app');
   
export default WarningModal;