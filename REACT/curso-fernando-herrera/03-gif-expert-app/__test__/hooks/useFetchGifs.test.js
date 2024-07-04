import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('useFetchGifs Test', () => {

    test('should return inital state', () => { 
        
       const { result } = renderHook( () =>  useFetchGifs('Category'));
        
    //    console.log(result);

       const { images, isLoading } = result.current


       expect( images.length ).toBe(0);
       expect( isLoading ).toBeTruthy();

     })

     test('should return an array of images, and isLoading false', async () => { 
        
        const { result } = renderHook( () =>  useFetchGifs('Category'));

        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();


      })
    
});