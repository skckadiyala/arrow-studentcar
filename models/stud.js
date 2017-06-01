var Arrow = require('arrow');

var student = Arrow.createModel('student', {
    fields: {
        fName: { type: String, description: 'the first name of the Student', required: true },
        lName: { type: String, description: 'the last name of the Student' },
        Class: { type: String, description: 'the class or grade of the student', required: true },
        year: { type: Number, description: 'year the student was born', required: true },
        StudentID: { type: Number, description: 'ID of the student', required: true },
        TeacherName: { type: String, description: 'Students teacher name' }
    },
    connector: 'appc.arrowdb'
});

module.exports = student;
