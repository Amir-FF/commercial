// Use on all header pages // take it to the first tag
let headerContainer = `<div class="container">

            <!-- fixed-menu -->
            <div class="row align-items-center justify-content-between">

                <!-- logo -->
                <div class="col-auto">
                    <a href="1.home.html" class="row">
                        <div class="col-auto">
                            <div id="logo" class="row align-items-center">

                                <div class="col-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                                        <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                                        <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                                    </svg>
                                </div>
                                
                                <div class="col-auto">
                                    <div class="row flex-direction-column">
                                        <div class="col-auto color-orange">construction</div>
                                        <div class="col-auto">building</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            

                <!-- menu -->
                <div id="fixed-menu" class="col-6 text-center">
                    <div class="row">
                        <div class="col-3"><a href="1.home.html">home</a></div>
                        <div class="col-3"><a href="2.blog.html">blog</a></div>
                        <div class="col-3"><a href="3.about.html">about</a></div>
                        <div class="col-3"><a href="4.contact-us.html">contact us</a></div>
                    </div>
                </div>


                <!-- dropdown menu icon -->
                <div id="dropdown-menu-icon" class="col-auto d-none color-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>


                <!-- search -->
                <div id="search" class="col-auto">
                    <div class="row">
                        <div class="col-12">
                            <form class="row">

                                <div class="col-4">
                                    <button type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                        </svg>
                                    </button>
                                </div>
                                
                                <div class="col-8">
                                    <input type="search" name="search" placeholder="search...">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- dropdown menu -->
        <div id="dropdown-menu" class="d-none">

            <div class="container  text-center">
                <div class="row">

                    <div class="col-12 word-menu">menu</div>

                    <!-- Generating code in js -->

                </div>
            </div>

            <div id="close-dropdown-menu" class="row flex-grow-1 background-color-33333380"></div>
        </div>`;

let header = document.createElement ("header")
header.innerHTML = headerContainer;

let bodyHeader = document.body;
let theFirstTagAndFirstTest = bodyHeader.firstChild;
bodyHeader.insertBefore (header, theFirstTagAndFirstTest)


// create link header in the head
let headerLinkCreate = document.createElement ("link")
headerLinkCreate.setAttribute ("rel", "stylesheet")
headerLinkCreate.setAttribute ("href", "CSS/3.header.css")


const headHeader = document.querySelector ('head')
headHeader.appendChild (headerLinkCreate)


// fixedMenu is copied to dropdown menu
let fixedMenuIsCopiedToDropdownMenu = $.querySelectorAll ("header #fixed-menu a")

let dropdownMenuTakeTagAFromFixedMenu = $.querySelector ("header #dropdown-menu .container .row")
let copy, createDiv, wordInTheMenu, createDivClassCol12AndMainMenu;

fixedMenuIsCopiedToDropdownMenu.forEach (function (aTag) {

    copy = aTag.cloneNode(true);

    wordInTheMenu = copy.textContent;

    copy.textContent = "";

    createDiv = $.createElement ("div")
    createDiv.innerText = wordInTheMenu;

    copy.appendChild (createDiv)

    createDivClassCol12AndMainMenu = $.createElement ("div");
    createDivClassCol12AndMainMenu.classList.add("col-12")
    createDivClassCol12AndMainMenu.classList.add("main-menu")
    createDivClassCol12AndMainMenu.appendChild (copy)

    dropdownMenuTakeTagAFromFixedMenu.appendChild (createDivClassCol12AndMainMenu)
})


// activate the a tag in the dropdownMenu
let  activateTheATagInTheDropdownMenu = $.querySelectorAll ("header #dropdown-menu .container .row a")
let num = 0, copyNum = -1;


activateTheATagInTheDropdownMenu.forEach (function (aTag) {
    aTag.addEventListener('click', function(event) {
        
        
        activateTheATagInTheDropdownMenu.forEach (function (texts) {
            if (texts.textContent.trim() === event.target.textContent) {

                copyNum = num;
            }
            num++;
        })
        num = 0;


        if (0 < copyNum) {
            
            activateTheATagInTheDropdownMenu[copyNum - 1].querySelector("div").classList.add ("active")
            
            activateTheATagInTheDropdownMenu[copyNum].querySelector("div").classList.add ("active")
        } else {
            activateTheATagInTheDropdownMenu[copyNum].querySelector("div").classList.add ("active")
        }
    })
})


// close dropdown menu
let dropdownMenu = document.getElementById ("dropdown-menu")

let closeDropdownMenu = document.getElementById ("close-dropdown-menu")
closeDropdownMenu.addEventListener('click', function() {
    dropdownMenu.classList.add ("d-none")
})


// Open dropdown menu
let dropdownMenuIcon = $.getElementById ("dropdown-menu-icon")
dropdownMenuIcon.addEventListener ("click", function () {
    dropdownMenu.classList.remove ("d-none")
})



// Which menu item to activate?
const titleToLowerCase = document.title.split('-')[0].toLowerCase().trim();

let aTagToLowerCase;

let activated = document.querySelectorAll ("header #fixed-menu a")
activated.forEach (function (aTag) {
    aTagToLowerCase = aTag.innerText.toLowerCase().trim();
    if (aTagToLowerCase === titleToLowerCase) {
        aTag.classList.add ("activated")
    }
})