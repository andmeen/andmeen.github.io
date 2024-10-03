async function registerSW() { 
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('sw.js'); 
    } catch (e) {
      console.log("PWA Confirmed"); 
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden'); 
  }
}

window.addEventListener('load', e => {
  registerSW(); 
});
