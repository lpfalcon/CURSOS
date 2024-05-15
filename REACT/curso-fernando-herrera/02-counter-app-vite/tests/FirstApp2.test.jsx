import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('FirstApp test', () => {
    const title = 'Hello World'
    const subTitle = `I'm a subtitle`;
    test('Sholud Match with the snapshot', () => {

        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    })

    test('Should show a message "Hello Word"', () => {

        render(<FirstApp title={title} />);

        expect(screen.getByText(title)).toBeTruthy();

    })

    test('Should show a title in an H1', () => {

        render(<FirstApp title={title} />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML)
            .toContain(title);

    })

    test('Should show a subtitle sent in props', () => {

        render(<FirstApp 
            title={title} 
            subTitle={subTitle}
            />);

        expect(screen.getAllByText(title).length).toBeGreaterThan(0);
    })

})
