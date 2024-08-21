// JobDetailsValidation.js

export default function validateJobDetails(formData) {
    const errors = {};

    if (!formData.position.trim()) {
        errors.position = "Position is required!";
    }

    if (!formData.workinghours.trim()) {
        errors.workinghours = "Working hours are required!";
    }

    if (!formData.salary) {
        errors.salary = "Expected salary is required!";
    } else if (formData.salary <= 0) {
        errors.salary = "Salary must be a positive number!";
    }

    return errors;
}
