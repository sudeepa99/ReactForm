import React, { useState } from 'react';
import validateEducation from './validateEducation';
import { useNavigate } from 'react-router-dom';

export default function Education() {
    const [formData, setFormData] = useState({
        qualification: '',
        university: '',
        year: '',
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    function handleInput(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleErrors(event) {
        event.preventDefault();

       
        const validationErrors = validateEducation(formData);
        setErrors(validationErrors);

        
        if (Object.keys(validationErrors).length === 0) {
            navigate('/experience'); 
        }
    }
    function handleBack() {
        navigate("/jdetails"); // 
    }

    return (
        <div className="w-screen grid grid-cols-1 laptop:h-screen phone:h-screen tablet:h-auto">
            <h2 className="text-center p-6 text-orange-400 phone:text-2xl tablet:text-4xl laptop:text-6xl">
                Education
            </h2>
            <form
                className="grid grid-cols-1 gap-1 bg-gradient-to-t from-blue-700 to-gray-600 p-8 rounded-lg text-sm mb-6 laptop:mx-auto laptop:p-20 laptop:text-lg tablet:mx-auto tablet:p-16 tablet:text-lg tablet:mt-6 laptop:mt-8 phone:mx-32"
                onSubmit={handleErrors}
                noValidate
            >
                {/* Highest Qualification */}
                <label htmlFor="qualification">Highest Qualification</label>
                <select
                    id="qualification"
                    name="qualification"
                    className="rounded-sm px-1 text-white hover:bg-blue-950"
                    required
                    value={formData.qualification}
                    onChange={handleInput}
                >
                    <option value="">Select Qualification</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Diploma/Certificate">Diploma/Certificate</option>
                </select>
                {errors.qualification && (
                    <p className="text-red-500">{errors.qualification}</p>
                )}

                {/* University/Institute */}
                <label htmlFor="university">University/Institute</label>
                <input
                    type="text"
                    name="university"
                    id="university"
                    value={formData.university}
                    onChange={handleInput}
                    className="rounded-sm px-1 text-white hover:bg-blue-950"
                    required
                />
                {errors.university && (
                    <p className="text-red-500">{errors.university}</p>
                )}

                {/* Completed Year */}
                <label htmlFor="year">Completed Year</label>
                <select
                    id="year"
                    name="year"
                    className="rounded-sm px-1 text-white hover:bg-blue-950"
                    required
                    value={formData.year}
                    onChange={handleInput}
                >
                    <option value="">Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
                {errors.year && <p className="text-red-500">{errors.year}</p>}

                {/* Buttons */}
                <div className="flex flex-row gap-11">
                    <button
                        type="button"
                        className="mt-2 bg-blue-950 rounded-md my-1 px-2 text-white hover:bg-orange-400"
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="mt-2 bg-blue-950 rounded-md my-1 px-2 text-white hover:bg-orange-400"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}
