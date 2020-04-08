const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function ({ title, body }) {
    notes.addNote(title, body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove command',
  builder: {
    title: {
      describe: 'Note title to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function ({ title }) {
    notes.removeNote(title);
  }
});

yargs.command({
  command: 'list',
  describe: 'Add a new list',
  handler: function () {
    console.log('Listing out all notes')
  }
});

yargs.command({
  command: 'read',
  describe: 'Read something',
  handler: function () {
    console.log('Reading something')
  }
})

yargs.parse();