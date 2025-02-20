import './modal.css';
import ReactDOM from 'react-dom';

type ModalProps = {
    children: React.ReactNode;
    closeModal: () => void;
    isModeModal: boolean;
};

export function Modal({ children, closeModal, isModeModal }: ModalProps) {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <div className="modal-backdrop" onClick={closeModal}>
            <div
                className="modal"
                style={{ borderColor: isModeModal ? 'yellowgreen' : 'red' }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button onClick={closeModal} className={isModeModal ? "show-button" : ''}>Close</button>
            </div>
        </div>,
        modalRoot
    );
}
