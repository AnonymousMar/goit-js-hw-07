import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const bodyEl = document.querySelector('.body');
let modalImage;


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

const galleryClick = event => {
    event.preventDefault();

    if (event.target.nodeNmae !== "IMG") {
        return event;
    }
    onOpenModal(event.target.dataset.source);
}
galleryEl.addEventListener('click', galleryClick);

const onCreateModal = img => basicLightbox.create(`<img src="${img}" width="1280" alt="${img}">`);

const onOpenModal = img => {
    modalImage = onCreateModal(img);
    modalImage.show();
    console.log("Open modal");
    document.addEventListener("keyup", onKeyPress);
};

const onCloseModal = event => {
     if (event === "click") modalImage.close();
    console.log("Close modal with click");
    document.removeEventListener("click", onKeyPress);
 };


const onKeyPress = event => {
    if (event.code === "Escape") modalImage.close();
    console.log("Close modal with escape");
    document.removeEventListener("keyup", onKeyPress);
};


console.log(galleryItems);