const request = require('supertest');

const server = require('./server');

describe('server', () => {
    it('db environment set to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should return 200 OK', () => {
            request(server)
            .get('/')
            .expect(200);
        });
    })
});
