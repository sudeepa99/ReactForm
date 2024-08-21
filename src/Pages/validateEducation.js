export default function validateEducation(formData) {
    const errors = {};

    if (!formData.qualification.trim()) {
        errors.qualification = "Qualification is required";
    }

    if (!formData.university.trim()) {
        errors.university = "University is required";
    }

    if (!formData.year.trim()) {
        errors.year = "Year is required";
    }

    return errors;
}
