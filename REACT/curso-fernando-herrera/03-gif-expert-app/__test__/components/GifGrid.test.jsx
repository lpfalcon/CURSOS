import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid/> Tests', () => {

    const category = 'Ugly Betty';

    test('should show the loading ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando ...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();

    })

    test('should show an image when useFetchGifs works', () => {

        const gifs = [
            {
                id: '1',
                title:'Title 1',
                url:'http://localhost/image1.jpg'
            },
            {
                id: '2',
                title:'Title 2',
                url:'http://localhost/image2.jpg'
            },

        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={ category }/>);

        const images = screen.getAllByRole('img');

        expect( images.length ).toBe( 2 );

    })

});