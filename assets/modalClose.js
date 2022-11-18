// Close modal when clicked outside.
const modalBackgrounds = document.querySelectorAll('.modal-background');
modalBackgrounds.forEach((modalBackground) => {
    modalBackground.addEventListener('click', () => {
        const modal = modalBackground.parentNode;
        modal.classList.remove('is-active');
        document.querySelector('html').classList.remove('modal-open');
    });
});
