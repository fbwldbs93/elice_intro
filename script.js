const section = document.querySelectorAll("section")

const nav = document.querySelectorAll("#nav ul li");

let eachSection;
let eachNav;

for(let i=0; i <section.length; i++ ){
    eachSection = section[i]
    eachSection.style.display="none";
    section[0].style.display="block";
}



for(let i=0; i <nav.length; i++ ){

    nav[i].addEventListener("click", function openContent(){
        if(section[i]){
            section[i].style.display="block";
        }
        
    })
}

