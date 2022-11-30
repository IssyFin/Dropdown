// import './style.css';

function init(){
    domSetup();
    addBindings();
}

// Dom cache
function domSetup(){
    let dropdowns = document.getElementsByClassName("dropdown");
    for(let i=0;i<dropdowns.length;i++){
        dropdowns[i].classList.add("hidden");
    }
}


//Add bindings
function addBindings(){
    let tabHolder = document.getElementsByClassName("tabHolder");
    for(let i=0;i<tabHolder.length;i++){
        let tabHolderChildren = tabHolder[i].children;
        tabHolder[i].addEventListener("mouseover",function(){
            for(let j= 0;j<tabHolderChildren.length;j++){
                if(tabHolderChildren[j].classList.contains("hidden")){
                    tabHolderChildren[j].classList.remove("hidden");
                }
            }
        }); 
        tabHolder[i].addEventListener("mouseout",function(){
            for(let j=0;j<tabHolderChildren.length;j++){
                if(tabHolderChildren[j].classList.contains("dropdown")){
                    tabHolderChildren[j].classList.add("hidden");
                }
            }
        })
    }
}

init();
