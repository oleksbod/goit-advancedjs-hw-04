import{a as b,S as w,i as h}from"./assets/vendor-29bc32e7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const S="45384085-93240435f28f8173a532fd559",f=async(e,t=1,a=15)=>{const o=`https://pixabay.com/api/?key=${S}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`;return(await b.get(o)).data},m=e=>{h.error({position:"topRight",icon:"icon-bi_x-octagon",title:"",progressBarColor:"rgb(181, 27, 27)",message:e})},$=e=>{h.info({position:"topRight",icon:"icon-bi_info",title:"",message:e,progressBar:"rgb(0, 113, 189)"})},y=document.querySelector(".gallery"),g=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),L=e=>e.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}">
        <div class="gallery-footer">
            <div class="item-block">
                <span class="item-title">Likes</span>
                <span class="item-count">${t.likes}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Views</span>
                <span class="item-count">${t.views}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Comments</span>
                <span class="item-count">${t.comments}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Downloads</span>
                <span class="item-count">${t.downloads}</span>
            </div>
        </div>
      </a>
     </li>`).join(""),p=e=>{y.innerHTML=L(e),g.refresh()},q=e=>{y.insertAdjacentHTML("beforeend",L(e)),g.refresh()},n=document.querySelector(".search-form"),c=document.querySelector(".loader"),l=document.querySelector("#loadMoreButton");let i=1,v="",d=15;const P=async e=>{var a;e.preventDefault();const t=e.target.elements.user_query.value.trim();if(t===""){m("Fill out the search field!"),n.reset();return}v=t,i=1,l.classList.add("is-hidden"),c.classList.remove("is-hidden"),p([]);try{const o=await f(t,i,d);if(o&&((a=o==null?void 0:o.hits)==null?void 0:a.length)===0){m("Sorry, there are no images matching your search query. Please try again!"),n.reset();return}p(o.hits),o.totalHits>d&&l.classList.remove("is-hidden")}catch(o){console.log(o)}finally{c.classList.add("is-hidden"),n.reset()}},B=async()=>{i+=1,c.classList.remove("is-hidden");try{const e=await f(v,i,d);q(e.hits),I(),i*d>=e.totalHits&&(l.classList.add("is-hidden"),$("We're sorry, but you've reached the end of search results."))}catch(e){console.log(e)}finally{c.classList.add("is-hidden")}},I=()=>{const e=document.querySelector(".gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}};n.addEventListener("submit",P);l.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map
