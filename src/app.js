/*if (process.argv[2] == "josh"){
    console.log("hey thats my name");
} else {
    console.log("thats not my name");
} Example when learning Node.*/
const yargs = require("yargs");

const { addNotes } = require("../utils/notes");

console.log(process.argv);
console.log(yargs.argv);

const command = process.argv[2]; //makes it so we dont have to type proc...

if (command == "add") {
    console.log("adding note");
    addNotes(yargs.argv.note);
} else if (command = "remove") {
    console.log("removing note");
} else if (command == "list") {
    console.log("listing all notes");
} else {
    console.log("Command not recognised");
}