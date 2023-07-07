import React, { useState, useRef, useEffect } from 'react';
import { getRecords } from '../utils/Utils';
import { RecordData } from '../components/RecordData';

function MusicFestival() {
    let records = getRecords();
    return (
        <div className='container'>
            <h3>Band Team Records</h3>
            <RecordData records={records} />
        </div>
    );
}

export default MusicFestival;