export const fullScreenOn = (id) => {
    const element=document.getElementById(id);
    const cloneElement=element.cloneNode(true);
    cloneElement.id=id+"_clone";
    cloneElement.className+=" fullscreen";
    document.body.appendChild(cloneElement)
    const closeButton=document.getElementById(id+"Close");
    closeButton.className=closeButton.className.replace(" close-btn-off"," close-btn-on");
  }

export const fullScreenOff = (id) =>{
    const cloneElement=document.getElementById(id+"_clone");
    cloneElement.remove();
    const closeButton=document.getElementById(id+"Close");
    closeButton.className=closeButton.className.replace(" close-btn-on"," close-btn-off");
}