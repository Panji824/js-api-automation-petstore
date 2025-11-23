const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;


// URL dasar Petstore API
const BASE_URL = 'https://petstore.swagger.io/v2'; 


describe('🐾 Petstore API Test Suite: Store Flow CRUD', function(){
    it('TC001- GET inventory status (GET /store/inventory)', async function(){
        const response = await request(BASE_URL)
        .get('/store/inventory')
        .expect(200);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');

    });
    it('TC002- CREATE new order (POST /store/order)', async function(){
        const orderData = {
            id: 300,
            petId: 200,
            quantity: 1,
            shipDate: new Date().toISOString(),
            status: "placed",
            complete: false
        };

        const response = await request(BASE_URL)
                .post('/store/order')
                .set('Accept', 'application/json')
                .send(orderData)
                .expect(200);

        expect(response.status).to.equal(200);
    });
})