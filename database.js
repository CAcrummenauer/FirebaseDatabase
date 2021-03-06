preObject = document.getElementById('preObject');
list = document.getElementById('list');
// Referenciando 'object' no bando de dados:
const db = firebase.database().ref().child('object');
const dbList = db.child('Cursos');

// Escutando qualquer tipo de mudança em 'object':
db.on('value', snap => {
   // console.log(snap.val());
   // preObject.innerText = JSON.stringify(snap.val(), null, 3)
});

dbList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerHTML = snap.val();
    li.id = snap.key;
    list.appendChild(li);
});

dbList.on('child_changed', snap => {
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
});

dbList.on('child_removed', snap => {
    const liRemoved = document.getElementById(snap.key);
    liRemoved.remove();
});