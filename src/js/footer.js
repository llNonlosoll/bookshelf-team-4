(() => {
  const refs = {
    openModalBtn: document.querySelector('.about-team-open-js'),
    closeModalBtn: document.querySelector('.about-team-close-js'),
    modal: document.querySelector('[data-modal]'),
    // ----------------Scroll block---------------
    bodyScroll: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isModalOpen =
      refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    refs.modal.classList.toggle('is-hidden');
    // ----------------Scroll block---------------
    refs.bodyScroll.classList.toggle('no-scroll');

    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  }
})();