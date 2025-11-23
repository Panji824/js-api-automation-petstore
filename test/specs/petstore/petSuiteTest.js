const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;





// URL dasar Petstore API
const BASE_URL = 'https://petstore.swagger.io/v2'; 

const petData = {
    id: 200,
    category: {
        id: 1,
        name: "Dogs"
    },
    name: "Rex",
    photoUrls: ["http://example.com/photo1"],
    tags: [{ id: 1, name: "tag1" }],
    status: "available"
};

const PET_ID = petData.id;


describe('🐾 Petstore API Test Suite: Pet Flow CRUD', function(){
    
   

    it('1. CREATE new pet (POST /pet)', async function(){
        const response = await request(BASE_URL)
            .post('/pet')
            .set('Content-Type', 'application/json')
            .send(petData);
            
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', PET_ID); 
        expect(response.body.name).to.equal(petData.name);
    });

    it('2. READ pet by id (GET /pet/{petId})', async function(){
        const response = await request (BASE_URL)
            .get('/pet/' + PET_ID);

        expect (response.status).to.equal (200);
        expect (response.body).to.have.property ('id', PET_ID);
        expect (response.body.name).to.equal (petData.name);
    });

    it('3. UPDATE pet by id (PUT /pet)', async function(){
        const updatedPetData = { ...petData, name: "Max", status: "pending" };
        const response = await request(BASE_URL)
            .put('/pet')
            .set('Content-Type', 'application/json')
            .send(updatedPetData);
            
        expect (response.status).to.equal(200);
        expect (response.body).to.have.property('name', 'Max');
        expect (response.body).to.have.property('status', 'pending');
    });

    it('4. DELETE pet by id (DELETE /pet/{petId}) - Teardown', async function(){
        const response = await request(BASE_URL)
            .delete('/pet/' + PET_ID);
            
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message', PET_ID.toString()); 
    });

    it('5. Verify pet is deleted (GET /pet/{petId})', async function(){
        const response = await request(BASE_URL)
            .get('/pet/' + PET_ID);
            
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property('message', 'Pet not found');
    });

});