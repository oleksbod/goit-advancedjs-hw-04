import iziToast from "izitoast";
import SimpleLightbox from 'simplelightbox';

export const showToast = (msg) => {
    iziToast.error({
        position: "topRight",
        icon: 'icon-bi_x-octagon',
        title: '',
        progressBarColor: 'rgb(181, 27, 27)',
        message: msg
    });
}

export const showInfoToast = (msg) => {
    iziToast.info({
        position: "topRight",
        icon: 'icon-bi_info',
        title: '',
        message: msg,        
        progressBar: 'rgb(0, 113, 189)',        
    });
}

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

//markup
const galleryMarkup = (images) => images.map(image =>
    `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}">
        <div class="gallery-footer">
            <div class="item-block">
                <span class="item-title">Likes</span>
                <span class="item-count">${image.likes}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Views</span>
                <span class="item-count">${image.views}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Comments</span>
                <span class="item-count">${image.comments}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Downloads</span>
                <span class="item-count">${image.downloads}</span>
            </div>
        </div>
      </a>
     </li>`
).join('');

export const showGallery = (images) => {
    gallery.innerHTML = galleryMarkup(images);
    lightbox.refresh();
}

export const appendGallery = (images) => {
    gallery.insertAdjacentHTML('beforeend', galleryMarkup(images));
    lightbox.refresh();
};
