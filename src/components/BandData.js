import { FestivalData } from './FestivalData';

export const BandData = (bands, index) => {
    return (
        bands.records.map((band, i) => (
            <ul key={i}>
                <li key={i}>{band.bandName}
                    <ul>
                        <FestivalData festivals={band.festivals} />
                    </ul>
                </li>
            </ul>
        ))
    );
}