var iconButton = window.document.getElementsByClassName('fa-sign-out-alt')[0];

iconButton.addEventListener('mouseenter', () => {
    iconButton.classList.add('fa-2x');
});

iconButton.addEventListener('mouseout', () => {
    iconButton.classList.remove('fa-2x');
})