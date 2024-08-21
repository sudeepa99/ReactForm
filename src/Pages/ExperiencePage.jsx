import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExperienceFormValidation from './ExperienceFormValidation';

export default function ExperiencePage() {
    const [formData, setFormData] = useState({
        title: '',
        other: '',
        company: '',
        experience: '',
        resume: '',
        letter: '',
        certification: ''
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

        // Generate validation errors
        const validationErrors = ExperienceFormValidation(formData);
        setErrors(validationErrors);

        // Only navigate if there are no errors
        if (Object.keys(validationErrors).length === 0) {
            alert("Application submitted successfully!");
        }
    }

    function handleBack() {
        navigate("/education"); // Navigate back to the education page
    }

    return (
        <div className='grid w-screen grid-cols-1 laptop:h-auto phone:h-auto tablet:h-auto'>
            <h2 className='p-6 text-center text-orange-400 phone:text-2xl tablet:text-4xl laptop:text-6xl'>Experience</h2>
            <form
                className='grid grid-cols-1 gap-1 p-8 mb-6 text-sm rounded-lg bg-gradient-to-t from-blue-700 to-gray-600 laptop:mx-auto laptop:p-20 laptop:text-lg tablet:mx-auto tablet:p-16 tablet:text-lg tablet:mt-6 laptop:mt-8 phone:mx-10'
                onSubmit={handleErrors}
                noValidate
            >
                {/* Experience Title */}
                <label htmlFor='title'>Experience Title</label>
                <select
                    id='title'
                    name='title'
                    className='px-1 text-white rounded-sm hover:bg-blue-950'
                    value={formData.title}
                    onChange={handleInput}
                >
                    <option value=''>Select Title</option>
                    <option>Software Engineer</option>
                    <option>Web Developer</option>
                    <option>Mobile App Developer</option>
                    <option>QA Engineer</option>
                    <option>Business Analyst</option>
                    <option>Project Manager</option>
                    <option>Other</option>
                </select>
                {errors.title && <p className='text-red-500'>{errors.title}</p>}

                {/* Other */}
                {formData.title === 'Other' && (
                    <>
                        <label htmlFor='other'>Specify your title</label>
                        <input
                            type='text'
                            id='other'
                            name='other'
                            value={formData.other}
                            onChange={handleInput}
                            className='px-1 text-white rounded-sm hover:bg-blue-950'
                        />
                        {errors.other && <p className='text-red-500'>{errors.other}</p>}
                    </>
                )}

                {/* Company */}
                <label htmlFor='company'>Company Name</label>
                <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleInput}
                    className='px-1 text-white rounded-sm hover:bg-blue-950'
                    required
                />
                {errors.company && <p className='text-red-500'>{errors.company}</p>}

                {/* Experience */}
                <label htmlFor='experience'>Years of Experience</label>
                <select
                    id='experience'
                    name='experience'
                    className='px-1 text-white rounded-sm hover:bg-blue-950'
                    onChange={handleInput}
                    value={formData.experience}
                    required
                >
                    <option value=''>Select Experience</option>
                    <option>0-2 years</option>
                    <option>2-4 years</option>
                    <option>4-6 years</option>
                    <option>More than 6 years</option>
                </select>
                {errors.experience && <p className='text-red-500'>{errors.experience}</p>}

                {/* Resume */}
                <label htmlFor='resume'>Resume Upload</label>
                <input
                    type='file'
                    name='resume'
                    id='resume'
                    accept='.pdf, .doc, .docx'
                    onChange={handleInput}
                    className='px-1 text-white rounded-sm'
                    required
                />
                {errors.resume && <p className='text-red-500'>{errors.resume}</p>}

                {/* Cover Letter */}
                <label htmlFor='letter'>Cover Letter</label>
                <textarea
                    id='letter'
                    name='letter'
                    rows='6'
                    value={formData.letter}
                    onChange={handleInput}
                    className='px-1 text-white rounded-sm hover:bg-blue-950'
                    required
                />
                {errors.letter && <p className='text-red-500'>{errors.letter}</p>}

                {/* Certification */}
                <div className="flex flex-row gap-2">
                <input
                    type='checkbox'
                    name='certification'
                    id='certification'
                    value={formData.certification}
                    onChange={handleInput}
                    required
                />
                <label htmlFor='certification'>
                    I here by certify that all the entered details are correct. 
                </label>

                </div>
                
                

                

                {/* Buttons */}
                <div className='flex flex-row phone:gap-11 laptop:gap-96'>
                    <button
                        className='px-2 my-1 mt-2 text-white rounded-md bg-blue-950 hover:bg-orange-400'
                        type='button'
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <button
                        className='px-2 my-1 mt-2 text-white rounded-md bg-blue-950 hover:bg-orange-400'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
