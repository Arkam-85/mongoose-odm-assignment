const mongoose = require("mongoose");

// Create a Mongoose schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60
    },

    course: {
        type: String,
        required: true
    }
});

// Create a model using the schema
const Student = mongoose.model("Student", studentSchema);

// Create a student document
const student = new Student({
    name: "Arkam",
    email: "arkam@example.com",
    age: 20,
    course: "Electronics and Computer Science"
});

// Validate the document
const validationError = student.validateSync();

if (validationError) {
    console.log("Validation Error:");
    console.log(validationError.message);
} else {
    console.log("Student document is valid!");
    console.log(student);
}