const icon = document.getElementById('icon');
const headsUp = document.getElementById('headsUp');

icon.addEventListener('mouseover', () => {
  headsUp.style.display = 'inline';
});

icon.addEventListener('mouseout', () => {
  headsUp.style.display = 'none';
})