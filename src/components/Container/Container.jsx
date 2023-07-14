//import PropTypes from 'prop-types'

import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import SearchBar from 'components/Searchbar/Searchbar';

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
  //pictureName,
  //page,
}) {
  return (
    <>
      <h2>Container</h2>
      <SearchBar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error && <>Oops... Error: {error}</>}
      <ImageGallery
        responcedImages={responcedImages}
        onOpenModal={onOpenModal}
      />

      {/* {error && <>Oops... Error: {error}</>} */}
      {responcedImages.length > 0 && <Button fetchLoadMore={fetchLoadMore} />}
      {modalIsOpen && (
        <Modal onCloseModal={onCloseModal} modalData={modalData} />
      )}
    </>
  );
}

export default Container;
