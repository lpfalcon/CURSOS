import getGifs from "../../src/helpers/getGifs"


describe('getGifs Tests', () => {

    test('should return an array of gifs', async () => {

        const gifs = await getGifs('Ugly Betty');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({

            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)

        })
    })
})