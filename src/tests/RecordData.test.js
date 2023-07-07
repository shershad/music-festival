import { render, screen } from '@testing-library/react';

const mockData = [
    {
        "recordLabel": "ACR",
        "band": [
            {
                "bandName": "Critter Girls",
                "festivals": []
            },
            {
                "bandName": "Manish Ditch",
                "festivals": [
                    "Trainerella"
                ]
            }
        ]
    },
    {
        "recordLabel": "Anti Records",
        "band": [
            {
                "bandName": "YOUKRANE",
                "festivals": [
                    "Trainerella"
                ]
            }
        ]
    }
];

const TestWithMockRecordData = (mockData) => {
    return (
        mockData.data.map((musicRecord, index) => (
            <ul key={index} className='ul-main'>
                <li key={index}> <small>Record:</small> <label className={'record-label'}>{musicRecord.recordLabel}</label>
                </li>
            </ul>
        ))
    );
}


test('Loading Record data', async () => {
    render(<TestWithMockRecordData data={mockData} />)
    const renderedData = await screen.findAllByText(/Record/i);   
    expect(renderedData.length > 0).toBeTruthy();
});