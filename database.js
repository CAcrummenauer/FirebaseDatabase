preObject = document.getElementById('preObject');

// Referenciando 'object' no bando de dados:
const db = firebase.database().ref().child('object');

// Escutando qualquer tipo de mudança em 'object':
db.on('value', snap => {
   console.log(snap.val());
   preObject.innerText = JSON.stringify(snap.val(), null, 3)
});