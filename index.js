let homeScoreBtn1=document.getElementById("home1point")
let homeScoreEl=document.getElementById("home-score")
let homeScore = 0

function homeIncrement1(){
    homeScore += 1
    homeScoreEl.textContent=homeScore
}

let homeScoreBtn2=document.getElementById("home2point")

function homeIncrement2(){
    homeScore += 2
    homeScoreEl.textContent=homeScore
}

let homeScoreBtn3=document.getElementById("home3point")

function homeIncrement3(){
    homeScore += 3
    homeScoreEl.textContent=homeScore
}

let guestScoreBtn1=document.getElementById("guest1point")
let guestScoreEl=document.getElementById("guest-score")
let guestScore = 0

function guestIncrement1(){
    guestScore += 1
    guestScoreEl.textContent=guestScore
}

let guestScoreBtn2=document.getElementById("guest2point")

function guestIncrement2(){
    guestScore += 2
    guestScoreEl.textContent=guestScore
}

let guestScoreBtn3=document.getElementById("guest3point")

function guestIncrement3(){
    guestScore += 3
    guestScoreEl.textContent=guestScore
}

let resetBtn=document.getElementById("reset")

function resetScore(){
    homeScoreEl.textContent=0
    guestScoreEl.textContent=0
}