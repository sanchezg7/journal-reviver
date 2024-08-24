import fs from "fs";
import journal from "./journal.js";

try {
    const data = fs.readFileSync("../GJournal.json", "utf-8");
    const json = JSON.parse(data);
    const theJournal = journal(json);
    console.log(theJournal);
} catch (err) {
    console.error(err);
}

console.log("hello")