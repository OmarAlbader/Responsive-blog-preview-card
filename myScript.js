let elem_h3 = document.querySelector("h3");

elem_h3.onmouseover = function () {
    elem_h3.style.color = "hsl(47, 88%, 63%)";
    elem_h3.style.cursor = "url(https://cdn.custom-cursor.com/db/4398/32/arrow2535.png), pointer";
};

elem_h3.onmouseleave = function () {
    elem_h3.style.color = "hsl(0, 0%, 7%)";
}

let card = document.querySelector(".card");
let media = window.matchMedia("(max-width: 375px)");

card.addEventListener("mouseover", function () {
    if (media.matches)
        card.style.boxShadow = "3.5vw 3.5vw 0px hsl(0, 0%, 7%)";
    else{
        card.style.boxShadow = "1.2vw 1.2vw 0px hsl(0, 0%, 7%)";
        
    }
});

card.addEventListener("mouseleave", function () {
    if (media.matches)
        card.style.boxShadow = "2vw 2vw 0px hsl(0, 0%, 7%)";
    else 
        card.style.boxShadow = ".5vw .5vw 0px hsl(0, 0%, 7%)";
});