import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('PRUEBAS EN 02-TEMPLATE-STRING', () => {

  test('getSaludo debe retornar Hola Laura', () => {

    const name = 'Laura'
    const message = getSaludo(name)
    expect(message).toBe(`Hola ${name}`)
  })


})
