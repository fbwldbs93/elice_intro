const section = document.querySelectorAll("section")

const nav = document.querySelectorAll("#nav ul li");

let eachSection;
let eachNav;

for(let i=0; i <section.length; i++ ){
    eachSection = section[i]
    eachSection.classList.add('hide')
    section[0].classList.add('show')

    // console.log(Array.from(section).indexOf(section[0]))
}


nav.forEach((curEl, index, array)=>{
    curEl.addEventListener('click', function(){ 
        for(let i =0; i <array.length; i ++ ){
            section[i].classList.remove('show')
            section[i].classList.add('hide')
        }
        

        section[index].classList.remove('hide')
        section[index].classList.add('show')
    })
})



// for(let i=0; i <nav.length; i++ ){

//     nav[i].addEventListener("click", function openContent(e){

//         // console.log(Array.from(nav).indexOf(e.currentTarget))

//         let cur = Array.from(nav).indexOf(e.currentTarget)

//         let secCur = Array.from(section).indexOf(section[i])


//         if(cur == secCur){
//             section[i].classList.remove('show')
//             section[i].classList.add('hide')
//             section[cur].classList.remove('hide')
//             section[cur].classList.add('show')

//         }
        

        
//     })
// }

