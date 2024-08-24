interface GeoLocation {
    latitude: number;
    longitude: number;
}

interface Region {
    center: GeoLocation;
}

interface Location {
    address: string;
    administrativeArea: string;
    country: string;
    latitude: number;
    localityName: string;
    longitude: number;
    placeName: string;
    region: Region;
}

interface Weather {
    conditionsDescription: string;
    pressureMB: number;
    relativeHumidity: number;
    temperatureCelsius: number;
    visibilityKM: number;
    weatherCode: string;
    weatherServiceName: string;
    windBearing: number;
    windChillCelsius: number;
    windSpeedKPH: number;
}

export interface Journal {
    audios: any[];  // If you know the structure of the audio objects, replace `any` with the correct type
    creationDate: string;  // ISO 8601 date string
    location: Location;
    photos: any[];  // If you know the structure of the photo objects, replace `any` with the correct type
    starred: boolean;
    tags: any[];  // If you know the structure of the tag objects, replace `any` with the correct type
    text: string;
    timeZone: string;
    uuid: string;
    weather: Weather;
}