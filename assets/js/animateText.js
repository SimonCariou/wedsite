function callback(entries) {
    for (var i in entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                console.log("entry.isIntersecting: " + entry.isIntersecting)
            } else {
                entry.target.classList.remove('in-view');
                console.log("entry.isIntersecting: " + entry.isIntersecting)
            }
        });
    }
}

function initObserver() {
    var observer = new IntersectionObserver(callback);
    var items = document.querySelectorAll('.observedElement');

    for (var i in items) {
        if (!items.hasOwnProperty(i)) {
            continue;
        }

        observer.observe(items[i]);
    }
}

if (window.IntersectionObserver) {
    initObserver();
} else {
    console.log("IntersectionObserver not supported.");
}