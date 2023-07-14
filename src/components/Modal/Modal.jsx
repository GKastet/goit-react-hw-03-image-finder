//import PropTypes from 'prop-types'
import { Component } from 'react';

class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleClickOverlay = event => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="overlay" onClick={this.handleClickOverlay}>
        <div className="modal">
          <img
            src={this.props?.modalData?.largeImageURL}
            alt={this.props?.modalData?.tags}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
