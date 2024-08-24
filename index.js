import fs from "fs";
import journal from "./onthisdayandroidapp/journal.js";
import journalEntryAdapter from "./journalEntryAdapter.js";
import printToFile from "./markdown/filePrinter.js";

try {
    // const data = fs.readFileSync("../GJournal.json", "utf-8");
    const data = fs.readFileSync("../Journal.json", "utf-8");
    const json = JSON.parse(data);
    const journalEntries = journal(json);
    journalEntries.forEach(entry => {
        const adaptedJournalData = journalEntryAdapter(entry);
        printToFile(adaptedJournalData)
    })
} catch (err) {
    console.error(err);
}

console.log("hello")