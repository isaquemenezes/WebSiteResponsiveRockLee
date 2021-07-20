( function readyJS(doc, win){
    'use strict'

    var showMenu = (toggleId, navId) => {
    var toggle = doc.getElementById('toggleId'),
        nav = doc.getElementById('navId');

        if (toggle && nav) {
            toggle.addEventListener('click', () =>{
                nav.classList.toggle('show');
            });
        }
    
    
    }
    showMenu('nav-toggle', 'nav-menu');
    


})(document, window);