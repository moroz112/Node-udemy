const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes'
}

const removeNote = (title) => {
  const notes = loadNotes();

  const newNotes = notes.filter((note) => {
    return note.title !== title
  });

  if (newNotes.length !== notes.length) {
    console.log(chalk.green.inverse(`Note removed`));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse('There is no node with such title'))
  }
}

const addNote = (title, body) => {
  let notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  });

  if (duplicateNotes.length > 0) {
    console.log(chalk.red.inverse('Note with this title already exist'))
  } else {
    saveNotes([...notes, { title, body }]);
    console.log(chalk.green.inverse('New note was added!!'))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  addNote,
  removeNote
}