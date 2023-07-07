import { FestivalData } from './FestivalData';

export const BandData = (bands, index) => {
    return (
        bands.records.map((band, i) => (
            <ul key={i}>
                <li key={i}><small>Band:</small> <label className='band-label'>{band.bandName}</label>
                    <ul>
                        <FestivalData festivals={band.festivals} />
                    </ul>
                </li>
            </ul>
        ))
    );
}