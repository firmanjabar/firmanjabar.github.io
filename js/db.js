// enable offline data
db.enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // probably multible tabs open at once
            console.log('persistance failed');
        } else if (err.code == 'unimplemented') {
            // lack of browser support for the feature
            console.log('persistance not available');
        }
    });

// real-time listener contents
db.collection('contents').orderBy('title').onSnapshot(snapshot => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        //console.log(change.type, change.doc.id, change.doc.data());
        if (change.type === 'added') {
            // add the document data to the web page
            renderContent(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
            // remove the document data from the web page
            removeContent(change.doc.id);
        }
    });
});

// add new content
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const content = {
        title: form.title.value,
        detail: form.detail.value
    };

    db.collection('contents').add(content)
        .catch(err => console.log(err));

    form.title.value = '';
    form.detail.value = '';
});

// remove a content
const contentContainer = document.querySelector('.contents');
contentContainer.addEventListener('click', evt => {
    if (evt.target.tagName === 'I') {
        const id = evt.target.getAttribute('data-id');
        //console.log(id);
        db.collection('contents').doc(id).delete();
    }
})