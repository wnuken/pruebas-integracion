const { json } = require('body-parser');
const supertest = require('supertest');
const { describe } = require('yargs');
const {app, server} = require('../index');
const api = supertest(app);

/*describe("pagina", () => {
    
})*/

test('carga html', async () => {
    await api
    .get('/pagina')
    .expect(200)
    .expect('Content-Type', /text\/html/)
});

test('Contenido Web', async () => {
    const response = await api.get('/pagina');
    expect(response.text).toContain('html lang="es"');
});

test('carga json', async () => {
    await api
    .get('/mascotas')
    .expect(200)
    .expect('Content-Type', /application\/json/)
});

test('Contenido Json', async () => {
    const response = await api.get('/mascotas');
    const contents = response.body.map(mascota => mascota.edad);
    expect(contents.toString()).toContain('años');
});

test('Contenido Json', async () => {
    const response = await api.get('/mascotas');
    const contents = response.body.map(mascota => mascota.edad);

    contents.forEach(element => {
        expect(element).toContain('años');
    });

    
});



afterAll(() => {
    server.close();
});
