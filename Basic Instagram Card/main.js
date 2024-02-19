
var friendStatus = document.querySelector("#friend-status");
var addButton = document.querySelector("#add-btn");

var imageContainer= document.querySelector("#image-container");
var likeIcon = document.querySelector("i");
var check = 0;

addButton.addEventListener("click",()=>{
    if(check==0)
    {
        friendStatus.textContent = "Friends"
        friendStatus.style.color = "green";
        addButton.textContent = "Remove Friend";
        addButton.style.backgroundColor = "Red";
        addButton.style.color = "white";
        check=1;
    }
    else
    {
        friendStatus.textContent = "Not Friends";
        friendStatus.style.color = "red";
        addButton.textContent = "Add Friend";
        addButton.style.backgroundColor = "cadetblue";
        addButton.style.color = "white";
        check=0;
    }
})

imageContainer.addEventListener("dblclick",()=>{
    likeIcon.style.transform = 'translate(-50%,-50%) scale(2)'
    likeIcon.style.color = "crimson"
    setTimeout(()=>{
        likeIcon.style.transform = 'translate(-50%,-50%) scale(0)'
    },500);
})