function showTab(id, button) {

    let contents = document.querySelectorAll(".tab-content");

    contents.forEach(function(content){
        content.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

    let buttons = document.querySelectorAll(".tab");

    buttons.forEach(function(btn){
        btn.classList.remove("active");
    });

    button.classList.add("active");

}