import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const initGallery = galleryItems.map(({ original, preview, description }) => `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}" 
                            data-source="${original}" 
                            alt= "${description}"
                        >
                    </a>
                </div>`).join("");
galleryEl.insertAdjacentHTML("beforeend", initGallery);

const lightboxOptions = {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);
