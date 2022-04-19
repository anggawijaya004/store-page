import React from 'react'
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgABDgAAAAcACL95fQAA1ys.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgABDgAAAAcACL95fQAA1ys.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAUAAAABEAPZj7gAADKoI.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAUAAAABEAPZj7gAADKoI.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAwwAAABUANqEKHAACBZM.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAwwAAABUANqEKHAACBZM.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAApQAAAAsAQlpeyAADr0g.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAApQAAAAsAQlpeyAADr0g.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAdwAAAAoAQyEigQAA6-g.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAdwAAAAoAQyEigQAA6-g.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgABDgAAAAcACL95fQAA1ys.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgABDgAAAAcACL95fQAA1ys.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAUAAAABEAPZj7gAADKoI.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAUAAAABEAPZj7gAADKoI.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAwwAAABUANqEKHAACBZM.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAwwAAABUANqEKHAACBZM.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAApQAAAAsAQlpeyAADr0g.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAApQAAAAsAQlpeyAADr0g.jpg.dpg.webp',
  },
  {
    original: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAdwAAAAoAQyEigQAA6-g.jpg.dpg.webp',
    thumbnail: 'https://id.360buyimg.com/Indonesia/s880x0_/nHBfsgAAdwAAAAoAQyEigQAA6-g.jpg.dpg.webp',
  },
];

export default function ImageList() {
  return (
    <ImageGallery items={images} thumbnailPosition='left' showNav={false} showPlayButton={false} showFullscreenButton={false}/>
  )
}
