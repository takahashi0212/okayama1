'use strict';

{
  const open = document.getElementById('open');
  const open02 = document.getElementById('open02');
  const close = document.getElementById('close');
  const close02 = document.getElementById('close02');
  const modal = document.getElementById('modal');
  const modal02 = document.getElementById('modal02');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  open02.addEventListener('click', () => {
    modal02.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  close02.addEventListener('click', () => {
    modal02.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
    close02.click();
  });
}
