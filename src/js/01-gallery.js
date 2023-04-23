import SimpleLightbox from 'simplelightbox';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import 'simplelightbox/dist/simple-lightbox.min.css';

const ulContainer = document.querySelector('.gallery');

let liItem = '';
galleryItems.map(({ preview, original, description }) => {
  liItem += `
        <li class="gallery__item">
             <a class="gallery__link" href="${original}">
                 <img class="gallery__image" src="${preview}" alt="${description}"/>
              </a>
        </li>
    `;
});
ulContainer.innerHTML = liItem;

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
