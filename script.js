const wrapper = document.getElementById("wrapper");

document.addEventListener('click', function(event){
    // Early Return If the event target doesn't match
    if (!event.target.closest('.sign-up-btn')) return;
    wrapper.classList.add("show-active-message");
}, false)


document.addEventListener('click', function(event){
  // Early Return If the event target doesn't match
  if (!event.target.closest('.sign-in-btn')) return;
  wrapper.classList.remove("show-active-message");
})