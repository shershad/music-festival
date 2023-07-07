import { render, screen } from '@testing-library/react';
import MusicFestival from '../components/MusicFestival';

test('Loading Music Festivals data', () => {
    render(<MusicFestival />);
    const linkElement = screen.getByText(/Band Team Records/);
    expect(linkElement).toBeInTheDocument();
});
