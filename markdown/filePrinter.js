import fs from 'fs';

export default journalData => {
    try {
    fs.writeFileSync(`output/${journalData.fileName}`, journalData.content)
    console.log(`file ${journalData.fileName} written successfully`);
    } catch (err) {
        console.error(`Error writing file ${journalData.fileName}: ${err}`);
    }
};