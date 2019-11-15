// Created by Browyn Louis



//Nav bar Mobile

function openMenu() {
    
    var open = document.querySelector("ul");
    
open.style.height="100vh";


};


function closeMenu() {

    var close = document.querySelector("ul");

    close.style.height="0vh";   
    
};


//Search Bar mobile

function openSearch() {

    var openSearch = document.querySelector(".searchbox");
    
    
    
    openSearch.style.display= "block";
    
    
    document.querySelector(".search").style.display="none";
      
}


function closeSearch() {

    var closeSearch = document.querySelector(".searchbox")
    closeSearch.style.display= "none";
           document.querySelector(".search").style.display="block";
      
};





