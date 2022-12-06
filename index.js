document.addEventListener("DOMContentLoaded",init);
document.body.onload=()=>{
    console.log("Loaded")
};
function init() {
    console.log("Loaded");
    const main=document.getElementById("text");
    main.textContent="This is really cool!"
};