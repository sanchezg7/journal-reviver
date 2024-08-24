export default entry => {
    return {
        getAudios: () => entry.audios,
        getCreationDate: () => entry.creationDate,
        getLocation: () => entry.location,
        getPhotos: () => entry.photos,
        getStarred: () => entry.starred,
        getTags: () => entry.tags,
        getText: () => entry.text,
        getTitle: () => entry.text.split("\n")[0],
        getBody: () => entry.text.split("\n")[1],
        getTimeZone: () => entry.timeZone,
        getUuid: () => entry.uuid,
        getWeather: () => entry.weather
    }
}