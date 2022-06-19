import { createCartPhoto } from "./createCartPhoto.js";

const renderGallery = (photos) => {
  const gallery = document.querySelector('.grid');
  const cards = photos.map(createCartPhoto);
  gallery.append(...cards);
};

export default renderGallery;