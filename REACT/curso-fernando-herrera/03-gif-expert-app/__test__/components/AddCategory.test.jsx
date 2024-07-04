import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Tests in <AddCategory/>', () => {

    const inputValue = 'Example';

    test('should change the input value', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);
        // screen.debug();

    })

    test('should call onNewCategory if input has a value', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        // screen.debug();
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue);

    })

    test('should not call onNewCategory if input is empty', () => { 

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect( onNewCategory ).not.toHaveBeenCalled();

     })
})