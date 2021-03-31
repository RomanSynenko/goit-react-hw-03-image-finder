import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.scss'

const modalRoot = document.querySelector('#modal-root');

class ModalWindow extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    };
    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onCloseModal();
        }
    };
    render() {
        return createPortal(
            <div className={s.Overlay} onClick={this.handleBackdropClick}>
                <div className={s.Modal}>
                    <img src={this.props.largeImg} />
                </div>
            </div>,
            modalRoot,
        );
    }
}
ModalWindow.propTypes = {
    largeImg: PropTypes.string.isRequired,
};
export default ModalWindow;