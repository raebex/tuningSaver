'use strict';

function Tuning (stringArray, name, dateSaved) {
  this.name = name;
  this.dateSaved = dateSaved;
  this.notes = stringArray;
}

Tuning.prototype.save = function () {
  // save to local storage
  console.log(this);
}

Tuning.prototype.update = function (newStringArray, newName, newDateSaved) {
  this.name = newName;
  this.dateSaved = newDateSaved;
  this.notes = newStringArray;
}

Tuning.prototype.delete = function () {
  // remove from local storage
}

Tuning.prototype.load = function () {
  // retrieve from local storage
}

function getStringValues(strings) {
  var tuningArray = [];

  strings.forEach(function(string) {
    tuningArray.push(string.value);
  });

  return tuningArray;
}

function showSaveInput() {
  document.getElementById('tuningInputGroup').classList.remove('hidden');
}

function formatDateSaved() {
  var date = new Date();

  return date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear();
}

function init() {
  var saveTriggerBtn = document.getElementById('saveTriggerBtn');
  var saveBtn = document.getElementById('saveBtn');

  saveTriggerBtn.addEventListener('click', showSaveInput);

  saveBtn.addEventListener('click', function() {
    var strings = document.querySelectorAll('.string');
    var tuningNameInput = document.getElementById('tuningName');
    var dateSaved = formatDateSaved();
    var tuning = new Tuning(getStringValues(strings), tuningNameInput.value, dateSaved);

    tuning.save();
  });
}

init();
