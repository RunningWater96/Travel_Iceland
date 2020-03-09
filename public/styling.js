var about = document.getElementById("aboutList")
var entertainment = document.getElementById("entertainmentList")
var travel = document.getElementById("travelList")
var business = document.getElementById("businessList")

function toggleAbout(){
    displayList(about)
}

function toggleEntertainment(){
    displayList(entertainment)
}

function toggleTravel(){
    displayList(travel)
}

function toggleBusiness(){
    displayList(business)
}

function displayList(list){
    if(list.style.display === 'none'){
        list.style.display = 'block'
    }else{
        list.style.display = 'none'
    }
}