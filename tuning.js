function Tuning (stringArray, name, dateSaved) {
  this.name = name;
  this.dateSaved = dateSaved;
  this.notes = stringArray;
}

Tuning.prototype.save = function () {
  console.log(this);
}

Tuning.prototype.load = function () {
  // retrieve from local storage
}