const icons = document.querySelectorAll('.icon-box');
const copyToast = document.querySelector('#copy-toast');
const copyToastBtn = document.querySelector('#copy-toast-btn');

let timeout = null;

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    timeout && clearTimeout(timeout);

    try {
      navigator.clipboard.writeText(icon.innerHTML);

      copyToast.classList.remove('hidden');

      timeout = setTimeout(() => {
        copyToast.classList.add('hidden');
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  });
});

copyToastBtn.addEventListener('click', (e) => {
  copyToast.classList.add('hidden');
});
