import { fetchImages } from './js/pixabay-api';
import { showGallery, showToast, appendGallery, showInfoToast } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('#loadMoreButton');

let currentPage = 1;
let searchQuery = '';
let imagesPerLoad = 15;

const onSearchFormSubmit = async (event) => {
    event.preventDefault();

    const searchedValue = event.target.elements.user_query.value.trim();

    if (searchedValue === '') {
        showToast("Fill out the search field!");
        searchForm.reset();
        return;
    }

    searchQuery = searchedValue;
    currentPage = 1;
    loadMoreButton.classList.add('is-hidden');
    loader.classList.remove('is-hidden');
    showGallery([]);

    try {
        const result = await fetchImages(searchedValue, currentPage, imagesPerLoad);

        if (result && result?.hits?.length === 0) {
            showToast("Sorry, there are no images matching your search query. Please try again!");
            searchForm.reset();
            return;
        }

        showGallery(result.hits);

        if (result.totalHits > imagesPerLoad) {
            loadMoreButton.classList.remove('is-hidden');
        }
    }
    catch (err) {
        console.log(err);
    }
    finally {
        loader.classList.add('is-hidden');
        searchForm.reset();
    }
};

const onLoadMoreButtonClick = async () => {
    currentPage += 1;
    loader.classList.remove('is-hidden');

    try {
        const result = await fetchImages(searchQuery, currentPage, imagesPerLoad);
        appendGallery(result.hits);

        smoothScroll();

        if (currentPage * imagesPerLoad >= result.totalHits) {
            loadMoreButton.classList.add('is-hidden');
            showInfoToast("We're sorry, but you've reached the end of search results.");
        }
    } catch (err) {
        console.log(err);
    } finally {
        loader.classList.add('is-hidden');
    }
};

const smoothScroll = () => {
    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
        const { height } = galleryItem.getBoundingClientRect();
        window.scrollBy({
            top: height * 2,
            behavior: 'smooth',
        });
    }
};

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreButton.addEventListener('click', onLoadMoreButtonClick);