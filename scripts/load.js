export default {
    mounted() {
      const gif1 = document.getElementById('gif1');
      const gif2 = document.getElementById('gif2');

      const loadPromise = (imgElement) => {
        return new Promise((resolve, reject) => {
          imgElement.onload = () => resolve();
          imgElement.onerror = reject;
        });
      };

      Promise.all([loadPromise(gif1), loadPromise(gif2)])
        .then(() => console.log('Both GIFs are loaded and ready to play'))
        .catch(() => console.log('An error occurred while loading the GIFs'));
    }
  };