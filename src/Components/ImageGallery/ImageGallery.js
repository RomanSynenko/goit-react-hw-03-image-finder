import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

import s from './Gallery.module.scss';

const ImageGallery = ({ images, onOpenModal }) => {
    return (
        <ul className={s.ImageGallery} >
            {
                images.map(({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        tags={tags}
                        largeImageURL={largeImageURL}
                        onOpenModal={onOpenModal}
                    />
                ))
            }
        </ul>
    )
}
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }),
    ),
    onOpenModal: PropTypes.func.isRequired,
};
export default ImageGallery;