var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
    }
}

xhr.onerror = function (e) {
    console.error(xhr.statusText);
}

xhr.open('GET', '/backend', true);

xhr.send(null)