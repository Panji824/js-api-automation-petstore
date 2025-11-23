const schemaPet = {
    type: 'object',
    required: ['id', 'category', 'name', 'photoUrls', 'tags', 'status'],
    properties: {
        id: {
            type: 'integer',
            minimum: 1
        },
        category: {
            type: 'object',
            required: ['id', 'name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' }
            }
        },
        name: {
            type: 'string',
            minLength: 1
        },
        photoUrls: {
            type: 'array',
            items: { type: 'string', format: 'uri' },
            minItems: 1
        },
        tags: {
            type: 'array',
            items: {
                type: 'object',
                required: ['id', 'name'],
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' }
                }
            }
        },
        status: {
            type: 'string',
            enum: ['available', 'pending', 'sold']
        }
    }
};
    
module.exports = {
    schemaPet
};