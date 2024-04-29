import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objecto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()
        console.log(user)

        expect(testUser).toStrictEqual(user)
    })

    test('getUserActivo debe retornar un objecto', () => {

        const username = 'Laura'

        const testUser = {
            uid: 'ABC567',
            username
        }
        
        const activeUser = getUsuarioActivo(username)
        expect(username).toEqual(activeUser.username)
        expect(testUser).toStrictEqual(activeUser)

    })
})
