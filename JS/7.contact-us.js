let errinputTest = document.querySelector('section#s2  #form-login #login input[type="text"]');
errinputTest.addEventListener ("focusout", function (event) {
    if (errinputTest.value.trim() === "") {
        errinputTest.classList.add ("error")
    } else {
        errinputTest.classList.remove ("error")
    }
})


let errinputEmail = document.querySelector('section#s2  #form-login #login input[type="email"]');
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
