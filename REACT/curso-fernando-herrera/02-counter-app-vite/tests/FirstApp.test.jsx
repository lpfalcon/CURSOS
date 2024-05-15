import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('FirstApp test', () => {

// test('should do match with snapshot', ()=>{
//     const title = 'Hello World'
//     const {container} = render( <FirstApp title={ title } />)
//     expect( container ).toMatchSnapshot()
// })

test('should show a title in an h1', ()=>{
    const title = 'Hello World'
    const {container, getByText, getByTestId} = render( <FirstApp title={ title } />);
    expect( getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1'); --> Forma no usada comunmente
    // expect(h1.innerHTML).toContain(title)

    expect( getByTestId('test-title').innerHTML).toContain(title)


})
  
test('should be show a subtitle send in props', ()=>{
    const title = 'Hello World'
    const subTitle = "subtitle"
    const { getAllByText } = render(
         <FirstApp 
            title={ title } 
            subTitle={subTitle}
         />
    );
    expect( getAllByText(subTitle).length).toBeGreaterThan(0);

})

})
