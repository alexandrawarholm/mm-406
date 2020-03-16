document.querySelectorAll("button").forEach(bt => {
    bt.onclick = (evt)=>{
        hideAll();
        show(evt.target.dataset.target);
    }
});

function hideAll(){
    let scenes = document.querySelectorAll("[class^=scene]");
    scenes.forEach(scene =>{ scene.classList.add("hidden")})
}

function show(scene){
    document.querySelector("#"+scene).classList.remove("hidden")
}