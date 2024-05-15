import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import { heroes } from "../../src/data/heroes";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroById => {
                console.log(heroById, 'heroe')
                expect(heroById).toEqual(heroes.find((hero) => hero.id === id));

                done()
            })
    })

    test('getHeroeByIdAsync debe retornar un error sin heroe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toBeFalsy()
                done()
            })
            .catch(error => {
                console.log( 'error, 9')
                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            })
    })
})
