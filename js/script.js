// var nome = prompt('Inserisci il tuo nome');
// var cognome = prompt('Inserisci il tuo cognome');
// var colorePreferito = prompt('Qual è il tuo colore preferito?');
//
// document.getElementById('presentazione').innerHTML= nome + cognome + colorePreferito + 19;

var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var colorePreferito = prompt('Qual è il tuo colore preferito?');
var res = (nome + cognome + colorePreferito).toLowerCase();

document.getElementById('presentazione').innerHTML= res + 19;
