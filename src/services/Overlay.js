export const body = document.getElementById("body")
export const overlayDiv = document.getElementById("overlay")
const projectModal = document.getElementById('modal-container')


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

export function openModal() {
    body.classList.add('no-scroll');
    projectModal.classList.remove("fade-out")
    projectModal.classList.add("fade-in")
}