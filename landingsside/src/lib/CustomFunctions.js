export default function ToggleMenu(bool) {
    let menu = document.getElementsByClassName('menu')[0];
    let cover = document.getElementsByClassName('menu-cover')[0];
    
    if(!menu || !cover) return;

    if(bool === true || menu.getAttribute('class') === 'menu menu-closed') {
        menu.setAttribute('class', 'menu menu-open');
        cover.setAttribute('class', 'menu-cover menu-cover-open');
    }

    else {
        menu.setAttribute('class', 'menu menu-closed');
        cover.setAttribute('class', 'menu-cover menu-cover-closed');
    }
}

export function ShortenName(name, maxNameLength) {
    const len = name.length;

    var newName = name;

    if(len > maxNameLength) {
        newName = `${name.substring(0, maxNameLength)}...`;
    }

    return newName;
}