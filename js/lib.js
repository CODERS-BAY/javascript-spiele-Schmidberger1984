function createPopup(errorText, reload=false){
    let popup=document.createElement("div");
    popup.setAttribute("id","popup");
    let headline=document.createElement("h3");
    headline.append(errorText);
    let button=document.createElement("button");
    if(reload){
        button.append("Play again");
        button.addEventListener("click", function(){
            location.reload();
        })
        
    }else{ 
        button.append("OK");
        button.addEventListener("click",function(){
            document.getElementById("popup").remove();
         })
    }   
    popup.append(headline);
    popup.append(button);
    document.body.append(popup);
}
