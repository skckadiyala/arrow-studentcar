var Arrow = require('arrow');
var car = Arrow.createModel('car', {
    fields: {
        make: { type: String, description: 'the make of a car' },
        model: { type: String, description: 'the model of the car', required: true },
        year: { type: Number, description: 'year the car was made', required: true },
        bluebook: { type: Number, description: 'kelly bluebook value of the car', required: true },
        mileage: { type: Number, description: 'current mileage of the car', required: true }
    },
    connector: 'appc.arrowdb'
});
module.exports = car;




