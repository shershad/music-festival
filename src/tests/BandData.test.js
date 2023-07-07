import { render, screen } from '@testing-library/react';

const mockData = [
    {
        "bandName": "Critter Girls",
        "festivals": [
            "Small Night In"
        ]
    },
    {
        "bandName": "Manish Ditch",
        "festivals": [
            "Trainerella"
        ]
    }
];

const TestWithMockBandData = (mockData) => {
    return (
        mockData.data.map((band, i) => (
            <ul key={i}>
                <li key={i}><small>Band:</small> <label className='band-label'>{band.bandName}</label>
                </li>
            </ul>
        ))
    );
}

test('Loading Band data', async () => {
    render(<TestWithMockBandData data={mockData} />)
    const renderedData = await screen.findAllByText(/Band/i);    
    expect(renderedData.length > 0).toBeTruthy();
});