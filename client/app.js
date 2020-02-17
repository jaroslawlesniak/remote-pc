let serverIP = window.location.host.substring(0, window.location.host.indexOf(':'));

const pressKey = (key) => {
    fetch(`http://${serverIP}:8080/key/${key}`);
}

const changeIcon = (e) => {
    e.childNodes[0].setAttribute('class', e.childNodes[0].getAttribute('class') === 'icon-play-circled' ? 'icon-pause-circle' : 'icon-play-circled');
}