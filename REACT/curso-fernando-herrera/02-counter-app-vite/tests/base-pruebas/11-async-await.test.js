import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
  
  
  test('getImage debe retornar un url de la image', async() => {
    
    const url = await getImagen()
  
    expect( typeof url ).toBe('string')
  
  })
  
})
