// section#s1
{
    const images = document.querySelector('section#s1 div.images');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slider = document.querySelectorAll('section#s1 div.slider button')


    let editImages, originalElement,copyElement, num1 = 0, num2 = 0, bool = true;

    function nextBtnFunction() {

        if (bool) {

            // to copy
            originalElement = document.querySelector('section#s1 div.images  div#image');
            copyElement = originalElement.cloneNode(true);
            copyElement.classList.remove ("image-" + num1)


            // slider to the right
            let clearTheEntireBackground = slider[num2];
            clearTheEntireBackground.classList.remove ("full-background")

            if (num2 === 2) {
                num2 = -1;
            }
            
            let fillTheEntireBackground = slider[num2 + 1]
            fillTheEntireBackground.classList.add ("full-background")

            num2++;
        
            
            if (num1 === 2) {
                num1 = 0;
            } else {
                num1++;
            }
            

            // create image and nextBtn
            copyElement.classList.add ("image-" +  num1)
            images.appendChild (copyElement)
            images.classList.add ("nextBtn")
            

            setTimeout(function() {

                // delete first elem
                images.classList.remove ("nextBtn")
        
                editImages = document.querySelectorAll('section#s1 div.images  div#image');
                editImages[0].remove()
        
                // bool
                bool = true;
            }, 500);
        }

        // bool
        bool = false;
    }
    nextBtn.addEventListener ("click", nextBtnFunction)

    setInterval(() => {
        nextBtnFunction()
    }, 7500);


    function prevBtnFunction() {

        if (bool) {

            // to copy
            originalElement = document.querySelector('section#s1 div.images  div#image');
            copyElement = originalElement.cloneNode(true);
            copyElement.classList.remove ("image-" + num1)


            // slider to the right
            let clearTheEntireBackground = slider[num2];
            clearTheEntireBackground.classList.remove ("full-background")

            if (num2 === 0) {
                num2 = 3;
            }
            
            let fillTheEntireBackground = slider[num2 - 1]
            fillTheEntireBackground.classList.add ("full-background")

            num2--;


            if (num1 === 0) {
                num1 = 2;
            } else {
                num1--;
            }


            // create image and prevBtn
            copyElement.classList.add ("image-" +  num1)
            images.insertBefore (copyElement, originalElement)
            images.classList.add ("prevBtn")


            setTimeout(function() {

                // delete first elem
                images.classList.remove ("prevBtn")
        
                editImages = document.querySelectorAll('section#s1 div.images  div#image');
                editImages[1].remove()
        
                // bool
                bool = true;
            }, 500);
        }

        // bool
        bool = false;
    }
    prevBtn.addEventListener ("click", prevBtnFunction)


    slider.forEach (function (button) {
        button.addEventListener ("click", function () {

            let buttonId = Number(button.id)
            let num3 = 1;

            if (num1 < buttonId) {

                num3 = buttonId - num1;

                if (num3 === 1) {
                    nextBtnFunction()
                } else if (num3 === 2) {

                    if (bool) {

                        // slider to the right
                        let clearTheEntireBackground = slider[num2];
                        clearTheEntireBackground.classList.remove ("full-background")
                        
                        let fillTheEntireBackground = slider[num2 + 2]
                        fillTheEntireBackground.classList.add ("full-background")
        
                        num2 = 2;
                        

                        for (let i = 0; i < 2; i++) {
        
                            // to copy
                            originalElement = document.querySelector('section#s1 div.images  div#image');
                            copyElement = originalElement.cloneNode(true);
                            copyElement.classList.remove ("image-0")
        
                            num1++;
                            
                            // create image and nextBtnPower2
                            copyElement.classList.add ("image-" +  num1)
                            images.appendChild (copyElement)
                        }
                        images.classList.add ("nextBtnPower2")
        
        
                        setTimeout(function() {
        
                            // delete first elem
                            images.classList.remove ("nextBtnPower2")
                    
                            editImages = document.querySelectorAll('section#s1 div.images  div#image');
                            editImages[0].remove()
                            editImages[1].remove()
                    
                            // bool
                            bool = true;
                        }, 500);
                    }

                    // bool
                    bool = false;
                } 
            }


            if (buttonId < num1) {

                num3 = num1 - buttonId;

                if (num3 === 1) {
                    prevBtnFunction()
                } else if (num3 === 2) {
                    

                    if (bool) {

                        // slider to the right
                        let clearTheEntireBackground = slider[num2];
                        clearTheEntireBackground.classList.remove ("full-background")
                        
                        let fillTheEntireBackground = slider[num2 - 2]
                        fillTheEntireBackground.classList.add ("full-background")
        
                        num2 = 0;

                        for (let i = 0; i < 2; i++) {
        
                            // to copy
                            originalElement = document.querySelector('section#s1 div.images  div#image');
                            copyElement = originalElement.cloneNode(true);
                            copyElement.classList.remove ("image-"+ num1)
        

                            num1--;
                            
                            
                            // create image and prevBtnPower2
                            copyElement.classList.add ("image-" +  num1)
                            images.insertBefore (copyElement, originalElement)
                        }
                        images.classList.add ("prevBtnPower2")


                        setTimeout(function() {
        
                            // delete first elem
                            images.classList.remove ("prevBtnPower2")
                    
                            editImages = document.querySelectorAll('section#s1 div.images  div#image');
                            editImages[1].remove()
                            editImages[2].remove()
                    
                            // bool
                            bool = true;
                        }, 500);
                    }

                    // bool
                    bool = false;
                }
            }
        })
    })
}


// section#s2
const images =  document.querySelectorAll('section#s2 #images .border');

const image = document.querySelector('section#s2 #images .border');
const imageOffsetTop = image.offsetTop + 59;
const imageOffsetTopPlusScrollHeight = image.offsetTop + image.scrollHeight - 20;

const bodyWidth = window.innerWidth - 42;

let S2num1 = 0, S2num2 = 0, index = [], bool = true;


// Refresh nearby
if (bodyWidth <= 768) {

    images.forEach ((image) => {

        if ((window.innerHeight + window.scrollY >= image.offsetTop) && (window.scrollY <= (image.offsetTop + image.scrollHeight))) {
            index.push(S2num2)
        }

        S2num2++;
    })

    S2num2 = 0;

    const animationS2 = setInterval(() => {

        if (index[S2num2] + 1) {
            images [index[S2num2]].classList.add ("animation-s2")
            images [index[S2num2]].classList.remove ("opacity-0-transform--100rem-100")
        }

        
        if (S2num2 === index.length) {
            clearInterval(animationS2);
        }
        
        index.shift()
    }, 625)
}


// section#s4
// one
const locationScrollTheCircle1  = document.querySelector ("section#s4 .location-scroll-1")
const animationTheCircle1 = document.querySelector ("section#s4 .location-scroll-1 .circle-1")
const animationTheText1 = document.querySelector ("section#s4 .location-scroll-1 .text-1")
let S4num1 = 0, S4bool1 = true;

// two
const locationScrollTheCircle2  = document.querySelector ("section#s4 .location-scroll-2")
const animationTheCircle2 = document.querySelector ("section#s4 .location-scroll-2 .circle-2")
const animationTheText2 = document.querySelector ("section#s4 .location-scroll-2 .text-2")
let S4num2 = 0, S4bool2 = true;

// three
const locationScrollTheCircle3  = document.querySelector ("section#s4 .location-scroll-3")
const animationTheCircle3 = document.querySelector ("section#s4 .location-scroll-3 .circle-3")
const animationTheText3 = document.querySelector ("section#s4 .location-scroll-3 .text-3")
let S4num3 = 0, S4bool3 = true;


// section#s6
const sectionS6 = document.querySelector ("section#s6")
const locationScrollTheAddAnimationS6 = document.querySelector ("section#s6 #word")
let S6bool = true;


// section#s7
// words
// one
const locationScrollTheLine1  = document.querySelector ("section#s7 #words .one")
const divNumber1 = document.querySelector ("section#s7 #words .one #number")
const span1 = document.querySelector ("section#s7 #words .one #number span")
const divLine1 = document.querySelector ("section#s7 #words .one #line div")
let S7num1 = 0, S7bool1 = true;

// two
const locationScrollTheLine2  = document.querySelector ("section#s7 #words .two")
const divNumber2 = document.querySelector ("section#s7 #words .two #number")
const span2 = document.querySelector ("section#s7 #words .two #number span")
const divLine2 = document.querySelector ("section#s7 #words .two #line div")
let S7num2 = 0, S7bool2 = true;

// three
const locationScrollTheLine3  = document.querySelector ("section#s7 #words .three")
const divNumber3 = document.querySelector ("section#s7 #words .three #number")
const span3 = document.querySelector ("section#s7 #words .three #number span")
const divLine3 = document.querySelector ("section#s7 #words .three #line div")
let S7num3 = 0, S7bool3 = true;


// slider images
const imagesS7 = document.querySelector('section#s7  #images #image #changes div');
const sliderS7 = document.querySelectorAll('section#s7 #images #slider button')

let sliderS7FullBackground = document.querySelector('section#s7 #images #slider button.full-background')
let numidS7 = 0, numIdButton = 0, result = 0, S7numImages = 0;

sliderS7.forEach (function (button) {
    button.addEventListener ("click", function () {

        // result nxet && prev
        numIdButton = Number (button.id)
        
        sliderS7FullBackground = document.querySelector('section#s7 #images #slider button.full-background')
        numIdFullBackgroundS7 = Number (sliderS7FullBackground.id)

        result = numIdButton - numIdFullBackgroundS7;

        switch (result) {

            case 1:

                S7numImages += 100;

                imagesS7.style.transform = "translateX(-"+ S7numImages +"%)";

                sliderS7FullBackground.classList.remove ("full-background")
                button.classList.add ("full-background")
            break;

            case 2:
                
                S7numImages += 200;

                imagesS7.style.transform = "translateX(-"+ S7numImages +"%)";

                sliderS7FullBackground.classList.remove ("full-background")
                button.classList.add ("full-background")
            break;

            case -1:

                S7numImages -= 100;

                imagesS7.style.transform = "translateX(-"+ S7numImages +"%)";

                sliderS7FullBackground.classList.remove ("full-background")
                button.classList.add ("full-background")
            break;

            case -2:
                S7numImages -= 200;

                imagesS7.style.transform = "translateX(-"+ S7numImages +"%)";

                sliderS7FullBackground.classList.remove ("full-background")
                button.classList.add ("full-background")
            break;
        }
        
    })
})

setInterval(() => {

    sliderS7FullBackground = document.querySelector('section#s7 #images #slider button.full-background')
    numIdFullBackgroundS7 = Number (sliderS7FullBackground.id) + 1;
    

    if (S7numImages === 200) {
        S7numImages = -100;
        numIdFullBackgroundS7 = 0;
    }

    S7numImages += 100;

    imagesS7.style.transform = "translateX(-"+ S7numImages +"%)";

    sliderS7FullBackground.classList.remove ("full-background")
    sliderS7[numIdFullBackgroundS7].classList.add ("full-background")

}, 7500);


// section#s8
// If it is above 1000, it will be read.
if (1000 < document.body.offsetWidth) {

    // next logo auto
    let  trackSliderLogo = document.querySelector ("section#s8 #logo #slide-list #slick-track")
    let  logoFirstItam = trackSliderLogo.querySelector (".col-3:first-of-type")
    let  logoLastItam = trackSliderLogo.querySelector (".col-3:Last-of-type")
    let dragging = true, boolS8 = true;
    
    // next logo auto
    setInterval(() => {
        if (boolS8) {
            if (!dragging) return;
        
            trackSliderLogo.classList.add ("next-logo")
        
            setTimeout(() => {
                
                logoFirstItam = trackSliderLogo.querySelector (".col-3:first-of-type")
                logoLastItam = trackSliderLogo.querySelector (".col-3:Last-of-type")
                trackSliderLogo.insertBefore (logoLastItam, logoFirstItam)
                
                trackSliderLogo.classList.remove ("next-logo")
        
            }, 500);
        }
    }, 2500);
    
    
    //! click to move
    let logoClickToMove = document.querySelector ("section#s8 #logo #slide-list")
    let offsetX = 0, numS8 = 0, isLeftNumberZero = 0;
    
    // mousedown
    logoClickToMove.addEventListener("mousedown", (event) => {
    
        if (boolS8) { 
            dragging = false;
        }
    
        offsetX = event.clientX;
    
        event.preventDefault();
    });
    
    // mousemove
    logoClickToMove.addEventListener("mousemove", (event) => {
        if (dragging) return;
    
        numS8 = event.clientX - offsetX;
    
        trackSliderLogo.style.left = numS8 + "px";
    });
    
    
    // mouseup && mouseleave
    function mouseupAndmouseleave() {
    
        isLeftNumberZero = parseInt(trackSliderLogo.style.left);
    
        if (boolS8 && isLeftNumberZero !== 0) {
            boolS8 = false;
    
            trackSliderLogo.classList.add ("anima")
    
            setTimeout(() => {
    
                trackSliderLogo.classList.remove ("anima")
                trackSliderLogo.style.left = "0px";
    
                boolS8 = true;
            }, 1250);
        }
    
        dragging = true;
    }
    document.addEventListener("mouseup", mouseupAndmouseleave);
    logoClickToMove.addEventListener("mouseleave", mouseupAndmouseleave)
}


// section#s9 
let errinputTest = document.querySelector('section#s9  #form-login #login input[type="text"]');
errinputTest.addEventListener ("focusout", function (event) {
    if (errinputTest.value.trim() === "") {
        errinputTest.classList.add ("error")
    } else {
        errinputTest.classList.remove ("error")
    }
})


let errinputEmail = document.querySelector('section#s9  #form-login #login input[type="email"]');
let errinputEmailAraay = [], indexS9;
errinputEmail.addEventListener ("focusout", function (event) {

    errinputEmailAraay = errinputEmail.value.split("")

    indexS9 = errinputEmailAraay.findIndex (function (find) {
        return find === "@";
    })

    errinputEmailAraay = errinputEmailAraay.splice (indexS9, errinputEmailAraay.length)
    errinputEmailAraay = errinputEmailAraay.join("").toLowerCase()

    


    if (errinputEmailAraay === "@gmail.com") {
        errinputEmail.classList.remove ("error")
    } else {
        errinputEmail.classList.add ("error")
    }   

})


// on scroll 
window.addEventListener ("scroll", () => {

    // section#2
    // 768 < bodyWidth
    if ((window.innerHeight + window.scrollY >= imageOffsetTop) && (window.scrollY <= imageOffsetTopPlusScrollHeight) && 768 < bodyWidth &&  bool) {

        const animationS2 = setInterval(() => {

            images [S2num1].classList.add ("animation-s2")
            images [S2num1].classList.remove ("opacity-0-transform--100rem-100")
            
            if (S2num1 === 2) {
                clearInterval(animationS2);
            }
            
           S2num1++;
        }, 625)
        
        bool = false;
    }

    // bodyWidth <= 768
    if (bodyWidth <= 768 && bool && S2num2 === index.length) {

        images.forEach ((image) => {
            if ((window.innerHeight + window.scrollY >= (image.offsetTop + 59)) && (window.scrollY <= (image.offsetTop + image.scrollHeight - 20))) {
                image.classList.add ("animation-s2")
                image.classList.remove ("opacity-0-transform--100rem-100")
            }
        })

        if (images[0].className === "col border animation-s2" && images[1].className === "col border animation-s2" && images[2].className === "col border animation-s2") {
            bool = false;
        }
    }



    // section#s4
    // one
    if (window.innerHeight + window.scrollY >= (locationScrollTheCircle1.offsetTop + 150) && window.scrollY <= locationScrollTheCircle1.offsetTop && S4bool1) {

        S4bool1 = false;

        const close1 = setInterval(() => {

            if (S4num1 === 68) {
                clearInterval(close1);
            }

            animationTheCircle1.style.background = "conic-gradient(from 0deg, #eee " + S4num1 + "%, #ff5e14 0%)";
            animationTheText1.innerText = S4num1;

            S4num1++
        }, 29)
    }

    // two 
    if (window.innerHeight + window.scrollY >= (locationScrollTheCircle2.offsetTop + 150) && window.scrollY <= locationScrollTheCircle2.offsetTop && S4bool2) {

        S4bool2 = false;

        const close2 = setInterval(() => {

            if (S4num2 === 75) {
                clearInterval(close2);
            }

            animationTheCircle2.style.background = "conic-gradient(from 0deg, #eee " + S4num2 + "%, #ff5e14 0%)";
            animationTheText2.innerText = S4num2;

            S4num2++
        }, 26)
    }

    // three
    if (window.innerHeight + window.scrollY >= (locationScrollTheCircle3.offsetTop + 150) && window.scrollY <= locationScrollTheCircle3.offsetTop && S4bool3) {

        S4bool3 = false;

        const close3 = setInterval(() => {

            if (S4num3 === 36) {
                clearInterval(close3);
            }

            animationTheCircle3.style.background = "conic-gradient(from 0deg, #eee " + S4num3 + "%, #ff5e14 0%)";
            animationTheText3.innerText = S4num3;

            S4num3++
        }, 55)
    }


    // section#s6
    if (window.innerHeight + window.scrollY >= sectionS6.offsetTop && window.scrollY <= (sectionS6.offsetTop + sectionS6.clientHeight) && S6bool) {

        S6bool = false;

        locationScrollTheAddAnimationS6.classList.add ("animation-s6")
    }


    // section#s7
    // one
    if (window.innerHeight + window.scrollY >= locationScrollTheLine1.offsetTop && window.scrollY <= (locationScrollTheLine1.offsetTop + locationScrollTheLine1.scrollHeight) && S7bool1) {
        
        S7bool1 = false;

        const close1 = setInterval(() => {

            if (S7num1 === 98) {
                clearInterval(close1);
            }

            // number
            span1.innerText = S7num1;
            divNumber1.style.marginRight = (100 - S7num1) + "%";

            // line
            divLine1.style.maxWidth = S7num1 + "%";

            S7num1++
        }, 17)
    }

    // two
    if (window.innerHeight + window.scrollY >= locationScrollTheLine2.offsetTop && window.scrollY <= (locationScrollTheLine2.offsetTop + locationScrollTheLine2.scrollHeight) && S7bool2) {
        
        S7bool2 = false;

        const close2 = setInterval(() => {

            if (S7num2 === 92) {
                clearInterval(close2);
            }

            // number
            span2.innerText = S7num2;
            divNumber2.style.marginRight = (100 - S7num2) + "%";

            // line
            divLine2.style.maxWidth = S7num2 + "%";

            S7num2++
        }, 19)
    }

    // three
    if (window.innerHeight + window.scrollY >= locationScrollTheLine3.offsetTop && window.scrollY <= (locationScrollTheLine3.offsetTop + locationScrollTheLine3.scrollHeight) && S7bool3) {
        
        S7bool3 = false;

        const close3 = setInterval(() => {

            if (S7num3 === 95) {
                clearInterval(close3);
            }

            // number
            span3.innerText = S7num3;
            divNumber3.style.marginRight = (100 - S7num3) + "%";

            // line
            divLine3.style.maxWidth = S7num3 + "%";

            S7num3++
        }, 18)
    }



    
})