const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const { Validator } = require('jsonschema');
const schemaUser = require('../../schema/schemaUser.js');
// URL dasar Petstore API
const BASE_URL = 'https://petstore.swagger.io/v2'; 




const userData = {
    id: 100,
    username: "testuser100",
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    password: "password123",
    phone: "1234567890",
    userStatus: 1
};


const USERNAME = userData.username;

describe('👤 Petstore API Test Suite: User Flow CRUD', function(){
    it('TC001- CREATE new user (POST /user)', async function(){
        const response = await request(BASE_URL)
                .post('/user')
                .set('Content_type', 'application/json')
                .send(userData)
                .expect(200);
            expect(response.status).to.equal(200);

    });

    it('TC002- READ user by username (GET /user/{username})', async function(){
        const response = await request(BASE_URL)
                .get('/user/' + USERNAME)
                .expect(200);

            const validator = new Validator();
            const validatorResult = validator.validate(response.body, schemaUser);
            expect(validatorResult.valid).to.be.true;

        expect(response.status).to.equal(200);
        expect(response.body.username).to.be.a('string');
        
    });
    
    it('TC003- UPDATE user by username (PUT /user/{username})', async function(){
        const UserUpdateData = { ...userData, firstName: "john", lastName: "titor" };

        const response = await request(BASE_URL)
                .put('/user/' + USERNAME)
                .set('Content-Type', 'application/json')
                .send(UserUpdateData)
                .expect(200);

            expect(response.status).to.equal(200);

    });

    it('TC004- DELETE user by username (DELETE /user/{username}) - Teardown', async function(){
        const response = await request(BASE_URL)
                .delete('/user/' + USERNAME)
                .expect(200);
            expect(response.status).to.equal(200);
    });

    it('TC005- Verify user is deleted (GET /user/{username})', async function(){
        const response = await request(BASE_URL)
                .get('/user/' + USERNAME)
                .expect(404);

            expect(response.status).to.equal(404);
    });
})