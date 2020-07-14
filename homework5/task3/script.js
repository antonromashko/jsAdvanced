window.onload = () => {
      const mainDiv = document.getElementById("main-div");
      const helpFunc = (e, cls) => {
        let target = e && e.target || window.event.srcElement;
        let dataToggleId = target.getAttribute('data-tooltip');
        if (!dataToggleId) {
            return
        }
        document.getElementById(dataToggleId).className = cls
      };
      mainDiv.addEventListener('mouseover', (e) => { helpFunc(e, 'black') });
      mainDiv.addEventListener('mouseout', (e) => { helpFunc(e, 'white') });
};