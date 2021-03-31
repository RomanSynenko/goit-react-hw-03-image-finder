import React from 'react';
import PropTypes from 'prop-types';

import s from './ImageGallery.module.scss';

import defaultImg from '../../image/defaultImage.jpeg';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onOpenModal }) => {
    return (
        <li className={s.ImageGalleryItem} >
            <img
                src={webformatURL}
                data-src={largeImageURL}
                alt={tags}
                className={s.ImageGalleryItem_image}
                onClick={onOpenModal} />
        </li >
    )
}
ImageGalleryItem.defaultProps = {
    webformatURL: defaultImg,
    tag: 'img',
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onOpenModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;