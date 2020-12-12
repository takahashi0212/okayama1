'use strict';

  const open01 = document.getElementById('open01');
  const open02 = document.getElementById('open02');
  const open03 = document.getElementById('open03');
  const open04 = document.getElementById('open04');
  const close01 = document.getElementById('close01');
  const close02 = document.getElementById('close02');
  const close03 = document.getElementById('close03');
  const close04 = document.getElementById('close04');
  const modal01 = document.getElementById('modal01');
  const modal02 = document.getElementById('modal02');
  const modal03 = document.getElementById('modal03');
  const modal04 = document.getElementById('modal04');
  const mask = document.getElementById('mask');

  open01.addEventListener('click', () => {
    modal01.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  open02.addEventListener('click', () => {
    modal02.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  open03.addEventListener('click', () => {
    modal03.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  open04.addEventListener('click', () => {
    modal04.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close01.addEventListener('click', () => {
    modal01.classList.add('hidden');
    mask.classList.add('hidden');
  });
  close02.addEventListener('click', () => {
    modal02.classList.add('hidden');
    mask.classList.add('hidden');
  });
  close03.addEventListener('click', () => {
    modal03.classList.add('hidden');
    mask.classList.add('hidden');
  });
  close04.addEventListener('click', () => {
    modal04.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close01.click();
    close02.click();
    close03.click();
    close04.click();
  });

