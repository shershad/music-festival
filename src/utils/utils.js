
import { getApi } from '../utils/api';

// let apiUrl = "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals";
// let getData = getApi(apiUrl);
// getData.then((response) => {
//     if (response.status === 200) {
//     } else {
//     }
// }); 
// getData.catch((error) => {
//    setErrorMsg('Something went wrong. Try again later'));
// });
const festivalData = require('../jsons/festivals.json')

export const getRecords = () => {
    let records = [];
    festivalData.forEach((festival, index) => {
        festival.bands.forEach((band, i) => {
            if (band.recordLabel != '' && band.recordLabel != undefined) {
                let musicRecords = {};
                let bandData = {};
                if (!records.some((item) => item['recordLabel'] == band.recordLabel)) {
                    bandData = getBands(band.recordLabel);
                    musicRecords['recordLabel'] = band.recordLabel;
                    musicRecords['band'] = bandData;
                    records.push(musicRecords);
                }
            }
        })
    });
    records.sort((a, b) => a.recordLabel.localeCompare(b.recordLabel));
    return records;
}

const getBands = (recordLabel) => {
    let bandData = []
    festivalData.forEach((festival, index) => {
        festival.bands.forEach((band, i) => {
            if (band.recordLabel == recordLabel) {
                bandData.push({ 'bandName': band.name, 'festivals': getFestivals(recordLabel, band.name) })
            }
        })
    });
    bandData.sort((a, b) => a.bandName.localeCompare(b.bandName));
    return bandData;
}

const getFestivals = (recordLabel, bandName) => {
    let festivals = []
    // let apiUrl = "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals";
    // let getData = getApi(apiUrl);
    const festivalData = require('../jsons/festivals.json')
    festivalData.forEach((festival, index) => {
        let festivalName = festival.name;
        festival.bands.forEach((band, i) => {
            if (band.recordLabel == recordLabel && band.name == bandName && festivalName != undefined) {
                festivals.push(festivalName);
            }
        })
    });
    festivals.sort((a, b) => a.localeCompare(b));
    return festivals;
}
