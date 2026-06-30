var modal = document.getElementsByClassName('modal')[0];
var opener = document.getElementsByClassName('modal-open')[0];
var closer = document.getElementsByClassName('close')[0];

console.log(modal);
console.log(opener);
console.log(closer);

opener.onclick = function() { modal.style.display = 'block'; }
closer.onclick = function() { modal.style.display = 'none'; }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
