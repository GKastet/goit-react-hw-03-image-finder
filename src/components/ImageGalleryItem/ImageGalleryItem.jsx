//import PropTypes from 'prop-types'

function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) {
  return (
    <li key={id}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onOpenModal({ id, tags, largeImageURL });
        }}
      />
    </li>
  );
}
export default ImageGalleryItem;
