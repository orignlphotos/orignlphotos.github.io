let read_buttons = document.querySelectorAll(".read");

window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
});
  

for(let i = 0; i < read_buttons.length; i++){
    let button = read_buttons[i];
    button.addEventListener("click", () => {
        let add_text = button.previousElementSibling;
        let dots = add_text.previousElementSibling.lastChild;

        if(dots.style.display === "none"){
            dots.style.display = "inline";
            button.textContent = "Read More";
            add_text.style.display = "none";
        }
        else{
            dots.style.display = "none";
            button.textContent = "Read Less";
            add_text.style.display = "inline";
        }
    });
}
