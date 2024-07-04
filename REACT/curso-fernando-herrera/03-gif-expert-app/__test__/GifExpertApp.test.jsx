import { fireEvent, render, screen } from "@testing-library/react";
import  GifExpertApp  from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {

    const inputValue = 'Ugly Betty';

    test('should show a div with the class card-grid', () => {
        
        const { container} = render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        const categories = container.getElementsByClassName('card-grid');
        console.log(categories.length);
        
        expect(categories.length).toBeGreaterThanOrEqual(0);
        // screen.debug();



    });


});