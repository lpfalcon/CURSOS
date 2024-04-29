import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp',()=>{

    test('getHeroeById debe de retornar un heroe por ID', ()=>{
        const id = 1;
        const hero = getHeroeById( id )        
        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })
    

    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id)
        expect(hero).toBeUndefined()

    })
    

    test('getHeroesByOwner debe de retornar Un arreglo con los Heroes de DC', () => {
        const owner = 'DC'
        const herosDC = getHeroesByOwner(owner)
        expect(herosDC.length).toBe(3)
        expect(herosDC).toEqual(heroes.filter((hero)=> hero.owner === owner))

    })
    
    test('getHeroesByOwner debe de retornar Un arreglo con los Heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroesMarvel = getHeroesByOwner(owner)
        expect(heroesMarvel.length).toBe(2)
        expect(heroesMarvel).toEqual(heroes.filter((hero) => hero.owner === owner))

    })
    
})