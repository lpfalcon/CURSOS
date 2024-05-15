import { fireEvent, render, screen } from '@testing-library/react'
import CounterApp from '../src/CounterApp'


describe('<CounterApp /> page testing', () => {
    const defaultValue       = 100;
    const stringDefaultValue = '100';
    test('Should match with the snapshot ',() => {

        const { container } =  render(< CounterApp value={defaultValue} />);
        expect( container ).toMatchSnapshot();

    })

    test('Should show the inital value sent in props', () => {

        render(< CounterApp value={defaultValue} />);
        expect( screen.getByText( defaultValue ) ).toBeTruthy();
        expect( screen.getByRole('heading', { level: 2} ).innerHTML)
                .toContain( stringDefaultValue );

    })


    test('Should increment a value when user click +1 button', () => {

        render(< CounterApp value={defaultValue} />);
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText(`${defaultValue + 1}`)).toBeTruthy();

    })


    
    test('Should decrement a value when user click +1 button', () => {

        render(< CounterApp value={defaultValue} />);
        fireEvent.click( screen.getByText('-1') );
        // screen.debug();
        expect(screen.getByText(`${defaultValue - 1}`)).toBeTruthy();

    })

    test('Should works reset button', () => {

        render(< CounterApp value={defaultValue} />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}) );
        expect(screen.getByText(defaultValue)).toBeTruthy();

    })
})