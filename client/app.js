let serverIP = "192.168.1.4";

window.onload = () => {
    // serverIP = prompt("Podaj adres IP komputera");
}

const pressKey = (key) => {
    fetch(`http://${serverIP}:8080/key/${key}`);
}

const changeIcon = (e) => {
    e.childNodes[0].setAttribute('class', e.childNodes[0].getAttribute('class') === 'icon-play-circled' ? 'icon-pause-circle' : 'icon-play-circled');
}