export const body = document.getElementById("body")
export const overlayDiv = document.getElementById("overlay")


export function openMenu() {
    body.classList.add('no-scroll');
    overlayDiv.classList.add('no-scroll');
    overlayDiv.classList.remove("fade-out")
    overlayDiv.classList.add("fade-in")
}

export function closeMenu() {
    body.classList.remove('no-scroll');
    overlayDiv.classList.remove('no-scroll');
    overlayDiv.classList.remove("fade-in")
    overlayDiv.classList.add("fade-out")
}
