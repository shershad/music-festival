import { render, screen } from '@testing-library/react';

const mockData = [
    "Trainerella",
    "Small Night In",
    "Twisted Tour",
    "LOL-palooza"
];

const TestWithMockFestivalData = (mockData) => {
    return (
        mockData.data.map( (festival, index) => (
            <li key={index}><small>Festival: </small><label className="festival-label">{festival}</label></li>
        ))
    );
}

test('Loading Festival data', async () => {
    render(<TestWithMockFestivalData data={mockData} />)
    // expect(screen.getByText(/Festival/i)).toBeInTheDocument();
    const renderedData = await screen.findAllByText(/Festival/i);
    expect(renderedData.length > 0).toBeTruthy();
});