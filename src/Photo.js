import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const imgWithClick = { cursor: 'pointer' };

const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
    const imgStyle = { margin: margin };
    imgStyle.marginBottom = 8;
    imgStyle.position = 'relative';

    if (direction === 'column') {
        imgStyle.position = 'absolute';
        imgStyle.left = left;
        imgStyle.top = top;
    }

    const handleClick = event => {
        onClick(event, { photo, index });
    };

    return (
        <div onClick={onClick ? handleClick : null}
             style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}>
            <img {...photo} src={photo.sites[0].imageUrl} />
            <div className="Row">
                {photo.sites.map( (site) => {
                    return (
                    <div className="Column">
                        <a style={{textDecoration:'none'}} href={'//' + site.siteUrl}> {site.siteName} {site.price} </a>
                    </div>
                    )
                } )}
            </div>
        </div>
    );
};

export const photoPropType = PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Photo.propTypes = {
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    photo: photoPropType.isRequired,
    margin: PropTypes.number,
    top: props => {
        if (props.direction === 'column' && typeof props.top !== 'number') {
            return new Error('top is a required number when direction is set to `column`');
        }
    },
    left: props => {
        if (props.direction === 'column' && typeof props.left !== 'number') {
            return new Error('left is a required number when direction is set to `column`');
        }
    },
    direction: PropTypes.string,
};

export default Photo;