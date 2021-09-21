export const body = document.getElementById("body")
export const overlayDiv = document.getElementById("overlay")
const portal = document.getElementById('portal')


export function openMenu() {
    body.classList.add('no-scroll');
    overlayDiv.classList.remove("fade-out")
    overlayDiv.classList.add("fade-in")
}

export function closeMenu() {
    body.classList.remove('no-scroll');
    overlayDiv.classList.remove("fade-in")
    overlayDiv.classList.add("fade-out")
}

export function modalOpen (){
    if (portal.lastChild.lastChild.classList.contains('modal-container')){
        body.classList.add('no-scroll');
        overlayDiv.classList.remove("fade-out")
        overlayDiv.classList.add("fade-in")
    }
}