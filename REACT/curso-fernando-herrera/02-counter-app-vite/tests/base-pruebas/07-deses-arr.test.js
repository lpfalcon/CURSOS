import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
  
  test('Debe retornar un string y un numero', ()=>{
  
      const [letters, numbers] = retornaArreglo()
      
      expect(typeof letters).toBe('string')
      expect(isNaN(numbers)).toBeFalsy()
      expect( letters ).toStrictEqual(expect.any(String) ) // espera cualquier string
  
  })
  
})
