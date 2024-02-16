export default {
    mounted() {
      const gif1 = document.getElementById('gif1');
      const gif2 = document.getElementById('gif2');
  
      const checkLoadStatus = () => {
        if (gif1.complete && gif2.complete) {
          console.log('Both GIFs are loaded and ready to play');
        }
      };

      gif1.addEventListener('load', checkLoadStatus);
      gif2.addEventListener('load', checkLoadStatus);
    }
  };