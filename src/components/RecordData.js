import { BandData } from '../components/BandData';

export const RecordData = (results) => {
    return (
        results.records.map((musicRecord, index) => (
            <ul key={index} className='ul-main'>
                <li key={index}> <small>Record:</small> <label className={'record-label'}>{musicRecord.recordLabel}</label>
                    <BandData records={musicRecord.band} key={index} />
                </li>
            </ul>
        ))
    );
}