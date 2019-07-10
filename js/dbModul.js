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

// getting data for modul
db.collection('contents').orderBy('title').get().then(snapshot => {
  snapshot.docs.forEach(doc => {
    renderModul(doc.data(), doc.id);
  });
});

const renderModul = (data, id) => {

  const html = `
    <div class="content-details" data-id="${id}">
      <a href="/pages/materi.html">
        <div class="content-title grey-text text-darken-2" style="margin: 2px;">${data.title}</div>
        <div class="divider"></div>
      </a>
    </div>
    `;
  modul.innerHTML += html;
};