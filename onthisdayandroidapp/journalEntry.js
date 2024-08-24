export default entry => {
    const getIndexToSplitOn = () => {
        const newLineIndex = entry.text.indexOf("\n");
        const periodIndex = entry.text.indexOf(".");
        if(newLineIndex < 0 && periodIndex < 0) {
            return entry.text.length;
        }
        if(newLineIndex > periodIndex) {
            return periodIndex + 1;
        }
        return newLineIndex + 1;
    };
    return {
        getAudios: () => entry.audios,
        getCreationDate: () => entry.creationDate,
        getLocation: () => entry.location,
        getPhotos: () => entry.photos,
        getStarred: () => entry.starred,
        getTags: () => entry.tags,
        getText: () => entry.text,
        getTitle: () => {
            const indexToSplitOn = getIndexToSplitOn();
            return entry.text.substring(0, indexToSplitOn);
        },
        getBody: () => {
            return entry.text;
        },
        getTimeZone: () => entry.timeZone,
        getUuid: () => entry.uuid,
        getWeather: () => entry.weather
    }
}