//import PropTypes from 'prop-types'

import { GalleryItemLi, ImgStyled } from "./ImageGalleryItemStyled";

function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) {
  return (
    <GalleryItemLi key={id}>
      <ImgStyled
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onOpenModal({ id, tags, largeImageURL });
        }}
      />
    </GalleryItemLi>
  );
}
export default ImageGalleryItem;
