import { BandData } from '../components/BandData';

export const RecordData = (results) => {
    return (
        <div className='container'>
            {
                results.records.map((musicRecord, index) => (
                    <ul key={index} className={'record-label'}>
                        <li key={index}> {musicRecord.recordLabel}
                            <BandData records={musicRecord.band} key={index} />
                        </li>
                    </ul>
                ))
            }
        </div>
    );
}