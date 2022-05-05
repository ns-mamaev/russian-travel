const observatoryCover = document.querySelector('.video-item__cover_content_observatory');
const kamchatkaCover = document.querySelector('.video-item__cover_content_kamchatka');

const playObservatory = observatoryCover.querySelector('.video-item__play-button');
const playKamchatka = kamchatkaCover.querySelector('.video-item__play-button');

const popup = document.querySelector('.popup-overlay');
const popupIframe = popup.querySelector('.video-item__iframe');

playObservatory.addEventListener('click', () => observatoryCover.style.display = 'none');
playKamchatka.addEventListener('click', () => {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopup);
});

const closePopup = (evt) => {
  if (evt.target !== popupIframe) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', closePopup);
  }
};
