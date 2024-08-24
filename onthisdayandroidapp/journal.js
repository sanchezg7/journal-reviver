import journalEntry from "./journalEntry.js";

export default data => {
    return data.entries.map(entry => journalEntry(entry))
}