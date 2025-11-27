const orderSchema = {
    type: 'object',
    required: [
        'id',
        'petId',
        'quantity',
        'shipDate',
        'status',
        'complete'
    ],
    properties: {
        id: {
            type: 'integer',
            format: 'int64',
            description: 'Unique identifier for the order'
        },
        petId: {
            type: 'integer',
            format: 'int64',
            description: 'ID of the pet being ordered'
        },
        quantity: {
            type: 'integer',
            minimum: 1,
            description: 'Number of units ordered'
        },
        shipDate: {
            type: 'string',
            format: 'date-time',
            description: 'Date and time the order was shipped'
        },
        status: {
            type: 'string',
            enum: [
                'placed',
                'approved',
                'delivered'
            ],
            description: 'Order status'
        },
        complete: {
            type: 'boolean',
            description: 'Indicates if the order is complete'
        }
    }
};

module.exports = {
    orderSchema
};