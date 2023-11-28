import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
let modal;

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class='gallery__link' href='${item.original}'>
        <img class='gallery__image' 
        src='${item.preview}' 
        data-source='${item.original}' 
        alt='${item.description}'/>
    </a>`;
  listEl.appendChild(listItemEl);
});

listEl.addEventListener("click", openImageInLightbox);

function openImageInLightbox(e) {
  const clickedOn = e.target;

  if (clickedOn.tagName !== "IMG") {
    return;
  }

  e.preventDefault();

  modal = basicLightbox.create(
    `<img width='1400' height='900' src='${clickedOn.dataset.source}'/>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeOnEscape);
      },

      onClose: (instance) => {
        document.removeEventListener("keydown", closeOnEscape);
      },
    }
  );
  modal.show();

  const closeOnEscape = (e) => {
    if (e.key === "Escape") {
      modal.close();
    }
  };
}
