import React, { useState, useRef, useEffect } from 'react';
import { getRecords } from '../utils/utils';
import { RecordData } from '../components/RecordData';

function MusicFestival() {
    let records= getRecords();
    return (
        <div className='container'>
           <RecordData records={records} /> 
        </div>
    );
}

export default MusicFestival;