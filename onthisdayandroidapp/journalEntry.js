export default data => {
    return {
        getAudios: () => data.audios,
        getCreationDate: () => data.creationDate,
        getLocation: () => data.location,
        getPhotos: () => data.photos,
        getStarred: () => data.starred,
        getTags: () => data.tags,
        getText: () => data.text,
        getTimeZone: () => data.timeZone,
        getUuid: () => data.uuid,
        getWeather: () => data.weather
    }
}