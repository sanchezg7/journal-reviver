export default (otdJournalEntry) => {
    const d = new Date(otdJournalEntry.getCreationDate());
    const formattedDate = `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}_${String(d.getUTCHours()).padStart(2, '0')}${String(d.getUTCMinutes()).padStart(2, '0')}${String(d.getUTCSeconds()).padStart(2, '0')}`;
    const fileName = `${formattedDate}.md`;
    return {
        fileName,
        content:
`---
tags:
    - OnThisDayApp
---
# ${otdJournalEntry.getTitle()}  

${otdJournalEntry.getBody()}

---  
# Metadata
Audios: ${otdJournalEntry.getAudios()}
Creation Date: ${otdJournalEntry.getCreationDate()}
Location: ${JSON.stringify(otdJournalEntry.getLocation())}
Photos: ${otdJournalEntry.getPhotos()}
Starred: ${otdJournalEntry.getStarred()}
Tags: ${otdJournalEntry.getTags()}
Timezone: ${otdJournalEntry.getTimeZone()}
Uuid: ${otdJournalEntry.getUuid()}
Weather: ${JSON.stringify(otdJournalEntry.getWeather())}
`
    }
}