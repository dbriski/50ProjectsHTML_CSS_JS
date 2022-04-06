const panels = document.querySelectorAll('.panel')

panels.forEach(pan => pan.addEventListener('click', () => {
    removeActivePanel();
    pan.classList.add('active');
}))

function removeActivePanel() {
  panels.forEach(pan => {
    pan.classList.remove('active');
  })
 }
