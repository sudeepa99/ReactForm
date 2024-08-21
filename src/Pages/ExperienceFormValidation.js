export default function ExperienceFormValidation(formData) {
    const errors = {};

    if (!formData.title) {
        errors.title = "Experience Title is required!";
    }

    if (formData.title === "Other" && !formData.other) {
        errors.other = "Please specify the title if 'Other' is selected!";
    }

    if (!formData.company) {
        errors.company = "Company name is required!";
    }

    if (!formData.experience) {
        errors.experience = "Experience is required!";
    }

    if (!formData.resume) {
        errors.resume = "Resume is required!";
    }

    if (!formData.letter) {
        errors.letter = "Cover letter is required!";
    }

    if (!formData.certification) {
        errors.letter = "Certification is required!";
    }

    return errors;
}
