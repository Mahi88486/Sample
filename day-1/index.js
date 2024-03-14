const contactsBtn = document.getElementById("contactbtn");
const groupsBtn = document.getElementById("groupbtn");

const contacts = document.getElementById("contacts");
const groups = document.getElementById("groups");


contactsBtn.addEventListener("click",function(){
    contacts.style.display = "block";
    groups.style.display = "none";
    contactsBtn.style.backgroundColor = "white";
    groupsBtn.style.backgroundColor = "transparent";
});
groupsBtn.addEventListener("click",function(){
    groups.style.display = "block";
    contacts.style.display = "none";
    contactsBtn.style.backgroundColor = "transparent";
    groupsBtn.style.backgroundColor = "white";
});