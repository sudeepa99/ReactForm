import React, { useState } from 'react';
import validateJobDetails from './JobDetailsValidation'; // Use the new validation file
import { useNavigate } from 'react-router-dom';

export default function JobDetailsPage() {
    const [formData, setFormData] = useState({
        position: '',
        workinghours: '',
        salary: ''
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    function handleInput(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleErrors(event) {
        event.preventDefault();

        
        const validationErrors = validateJobDetails(formData); 
        setErrors(validationErrors);

        
        if (Object.keys(validationErrors).length === 0) {
            navigate('/education'); 
        }
    }
    function handleBack() {
        navigate("/"); // 
    }

    return (
        <div className="grid w-screen grid-cols-1 pt-6 laptop:h-screen phone:h-screen tablet:h-screen">
            <h2 className="p-6 text-center text-orange-400 phone:text-2xl tablet:text-4xl laptop:text-6xl">
                Job Details
            </h2>
            <form
                onSubmit={handleErrors}
                noValidate
                className="grid grid-cols-1 mb-6 text-sm rounded-lg bg-gradient-to-t from-blue-700 to-gray-600 phone:p-4 laptop:mx-auto laptop:p-20 laptop:text-lg tablet:mx-auto tablet:p-16 tablet:text-lg tablet:mt-6 laptop:mt-8 phone:mx-28 laptop:gap-2"
            >
                {/* Position */}
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    name="position"
                    id="position"
                    value={formData.position}
                    onChange={handleInput}
                    className="px-1 text-white rounded-sm hover:bg-blue-950"
                    required
                />
                {errors.position && <p className="text-red-500">{errors.position}</p>}

                {/* Working Hours */}
                <label htmlFor="workinghours">Number of Hours/Week</label>
                <div className="flex flex-col pl-3">
                <label>
                    <input
                        type='radio'
                        name='workinghours'
                        value="0-10"
                        checked={formData.workinghours === '0-10'}
                        onChange={handleInput}
                    />
                    0-10 Hrs
                </label>
                <label>
                    <input
                        type='radio'
                        name='workinghours'
                        value="10-20"
                        checked={formData.workinghours === '10-20'}
                        onChange={handleInput}
                    />
                    10-20 Hrs
                </label>
                <label>
                    <input
                        type='radio'
                        name='workinghours'
                        value="20-30"
                        checked={formData.workinghours === '20-30'}
                        onChange={handleInput}
                    />
                    20-30 Hrs
                </label>
                <label>
                    <input
                        type='radio'
                        name='workinghours'
                        value="30-40"
                        checked={formData.workinghours === '30-40'}
                        onChange={handleInput}
                    />
                    30-40 Hrs
                </label>
                </div>
                
                {/* <select
                    id="workinghours"
                    name="workinghours"
                    value={formData.workinghours}
                    onChange={handleInput}
                    required
                    className="px-1 text-white rounded-sm hover:bg-blue-950"
                >
                    <option value="">Select Hours</option>
                    <option  value="0-10">0-10 Hrs</option>
                    <option value="10-20">10-20 Hrs</option>
                    <option value="20-30">20-30 Hrs</option>
                    <option value="30-40">30-40 Hrs</option>
                </select> */}
                {errors.workinghours && <p className="text-red-500">{errors.workinghours}</p>}



                {/* Expected Salary */}
                <label htmlFor="salary">Expected Salary</label>
                <input
                    type="number"
                    name="salary"
                    id="salary"
                    value={formData.salary}
                    onChange={handleInput}
                    className="px-1 text-white rounded-sm hover:bg-blue-950"
                    required
                />
                {errors.salary && <p className="text-red-500">{errors.salary}</p>}

                {/* Buttons */}
                <div className="flex flex-row gap-11">
                    <button type="button" onClick={handleBack} className="px-2 my-1 mt-2 text-white rounded-md bg-blue-950 hover:bg-orange-400">
                        Back
                    </button>
                    <button type="submit" className="px-2 my-1 mt-2 text-white rounded-md bg-blue-950 hover:bg-orange-400">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}
