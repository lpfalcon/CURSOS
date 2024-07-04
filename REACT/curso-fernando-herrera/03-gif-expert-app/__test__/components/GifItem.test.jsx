import {  render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('<GifItem/> Component Testing', () => {
    const title = 'title';
    const url = 'http://localhost/url';

    test('Should match with the snapshot', () => {
       
        const { container } =  render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    })

    test('Should show the image and the alt text', () => {

        render(<GifItem title={title} url={url} />);
        // screen.debug()
        // console.log(screen.getByRole('img').title)
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    })

    test('Shold be show the title in the component', ()=>{
        
        render(<GifItem title={title} url={url} />);
        expect( screen.getByText( title ) ).toBeTruthy();

    })
})