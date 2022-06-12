"use strict"

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('note');

let notes;
if (localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem('notes'));
} else {
    notes = [];
}

localStorage.setItem('notes', JSON.stringify(notes));

let info = JSON.parse(localStorage.getItem('notes'));
let liMaker = text => {
  let li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  notes.push(input.value);
  localStorage.setItem('notes', JSON.stringify(notes));
  liMaker(input.value);
  input.value = '';
});

info.forEach(note => {
  liMaker(note);
});

button.addEventListener('click', function() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});


