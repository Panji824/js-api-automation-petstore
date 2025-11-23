const schemaUser = {
    type: 'object',
    required: ['id', 'username', 'firstName', 'lastName', 'email', 'password', 'phone', 'userStatus'],
    properties: {
        id: { 
            type: 'integer',
            minimum: 1
         },
        username: { 
            type: 'string',
            minLength: 5,
            maxLength: 20
            },
        firstName: { 
            type: 'string'
        },
        lastName: { 
            type: 'string' 
        },
        email: { 
            type: 'string', 
            format: 'email' 
        },
        password: { 
            not: { type: 'string' }
        },
        phone: { 
            type: 'string' 
        },
        userStatus: { type: 'integer' }
    }
    
}
module.exports = {
    schemaUser
};
