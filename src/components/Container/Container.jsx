import PropTypes from 'prop-types'

import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import SearchBar from 'components/Searchbar/Searchbar';
import { ContainerStyled } from './ContainerStyled';

function Container({
  onSubmit,
  responcedImages,
  isLoading,
  error,
  fetchLoadMore,
  onOpenModal,
  onCloseModal,
  modalIsOpen,
  modalData,  
}) {
  return (
    <ContainerStyled>
      
      <SearchBar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      <ImageGallery
        responcedImages={responcedImages}
        onOpenModal={onOpenModal}
      />      
      {responcedImages.length > 0 && <Button fetchLoadMore={fetchLoadMore} />}
      {modalIsOpen && (
        <Modal onCloseModal={onCloseModal} modalData={modalData} />
      )}
    </ContainerStyled>
  );
}

Container.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fetchLoadMore: PropTypes.func.isRequired, 
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  responcedImages: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  modalData: PropTypes.object
}

export default Container;
