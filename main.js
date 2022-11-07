let progress = document.querySelectorAll(".stack-el .progress span")
let theRoof = document.querySelector(".mySkills")



window.onscroll = function(){
    if(window.scrollY > theRoof.offsetTop - 150){
        progress.forEach(e=>{
            e.style.width = e.dataset.rate
        })
    }
    netflixAnimation()
}




let workRoof = document.querySelector(".work")
let firstLine = document.querySelector(".project .firstLine")
let secondLine = document.querySelector(".project .secondLine ")
let thirdLine = document.querySelector(".project .thirdLine ")
let playButtonYt = document.querySelector(".youtube .play")
let twitAnim = document.querySelector(".twitter .note ")



function netflixAnimation(){
    if(window.scrollY >= workRoof.offsetTop - 120){
        firstLine.classList.add("animationOne");
        secondLine.classList.add("animationTwo");
        thirdLine.classList.add("animationThree");
        playButtonYt.classList.add("playanimation");
        twitAnim.classList.add("twitanim");
    }
}   



