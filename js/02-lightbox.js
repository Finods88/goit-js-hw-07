import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listEl = document.querySelector(".gallery");
const galleryLinks = [];

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `
        <a class='gallery__link' href='${item.original}'>
            <img class='gallery__image' 
            src='${item.preview}' 
            alt='${item.description}'/>
        </a>
    `;

  listEl.appendChild(listItemEl);
  galleryLinks.push(listItemEl.querySelector(".gallery__link"));
});

const lightbox = new SimpleLightbox(galleryLinks, {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
