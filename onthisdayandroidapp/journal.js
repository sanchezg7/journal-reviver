import journal from "./journalEntry.js";

export default data => {
    return data.entries.map(entry => journal(entry))
}