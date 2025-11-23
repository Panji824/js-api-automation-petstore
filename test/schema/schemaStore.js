const schemaPetStore = {
    "type": "object",
    "required": ["id", "name", "email", "password", "phone", "userStatus"],
    "properties": {
        "id": {
            "type": "integer",
            "minimum": 1
        },
        "name": {
            "type": "string",
            "minLength": 1
        },
        "email": {
            "type": "string",
            "format": "email"
        },
        "password": {
            "type": "string",
            "minLength": 6
        },
        "phone": {
            "type": "string",
            "minLength": 10
        },
        "userStatus": {
            "type": "integer"
        }
    }
};
module.exports = {
    schemaPetStore
};