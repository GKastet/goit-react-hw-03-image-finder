//import PropTypes from 'prop-types'

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ responcedImages, onOpenModal }) {
    //const checkResponcedImages = Array.isArray(responcedImages) && responcedImages.length > 0
  return (
    <ul className="gallery">
      {responcedImages?.length>0 && responcedImages.map(({ id, tags, webformatURL, largeImageURL }) => {
        //console.log(id, tags, webformatURL, largeImageURL)
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onOpenModal={onOpenModal}
          />
        );
      })}
    </ul>
  );
}

export default ImageGallery;
