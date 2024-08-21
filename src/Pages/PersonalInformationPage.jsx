import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Validation from './Validation';

export default function PersonalInformationPage() {

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        email: '',
        age : '',
        phoneNumber : ''
    }
    );

    const navigate = useNavigate();

    const [errors,setErrors] = useState({})

    function handleInput(event) {
        const newObj = {...formData, [event.target.name]: event.target.value}
        setFormData(newObj)
    }

    function handleErrors(event){
        event.preventDefault();

        // Generate validation errors
        const validationErrors = Validation(formData);
        setErrors(validationErrors);

        // Only navigate if there are no errors
        if (Object.keys(validationErrors).length === 0) {
            navigate('/jdetails'); // Replace with your actual route
        }
    }


  return (
    <div className='grid w-screen grid-cols-1 laptop:h-auto phone:h-screen tablet:h-auto'>
        <h1 className='p-6 text-center text-orange-400 phone:text-2xl tablet:text-4xl laptop:text-6xl'>Job Application</h1>
        <h2 className='ml-32 text-sm text-orange-400 bg-opacity-40 laptop:ml-96 laptop:pl-44 laptop:text-lg tablet:text-lg tablet:ml-70 tablet:pl-48'>Personal Information</h2>
        <form className='grid grid-cols-1 gap-1 p-8 mb-6 text-sm rounded-lg bg-gradient-to-t from-blue-700 to-gray-600 laptop:mx-auto laptop:p-20 laptop:text-lg tablet:mx-auto tablet:p-16 tablet:text-lg tablet:mt-6 laptop:mt-8 phone:mx-32' onSubmit={handleErrors} noValidate>

            {/* firstName */}
            <label htmlFor='firstname'>
                First Name
            </label>
            <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                required
                className='px-1 text-white rounded-sm hover:bg-blue-950'
                onChange={handleInput}
            />
            {errors.firstName && <p className='text-red-500'>{errors.firstName}</p>}

            {/* last name */}
            <label htmlFor='lastname'>
                Last Name
            </label>
            <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                className='px-1 text-white rounded-sm hover:bg-blue-950'
                onChange={handleInput}
                required
            />
            {errors.lastName && <p className='text-red-500'>{errors.lastName}</p>}

            {/* email*/}
            <label htmlFor='email'>
                Email
            </label>
            <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInput}
                required
                className='px-1 text-white rounded-sm hover:bg-blue-950'
            />
            {errors.email && <p className='text-red-500'>{errors.email}</p>}

            {/* age */}
            <label htmlFor='age'>
                Age
            </label>
            <input
                type='number'
                id='age'
                name='age'
                value={formData.age}
                onChange={handleInput}
                required
                className='px-1 text-white rounded-sm hover:bg-blue-950'
            />
            {errors.age && <p className='text-red-500'>{errors.age}</p>}

            {/* Phone Number */}
            <label htmlFor='phoneNumber'>
                Phone Number
            </label>
            <input
                type='tel'
                id='phoneNumber'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleInput}
                required
                className='px-1 text-white rounded-sm hover:bg-blue-950'
            />
            {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber}</p>}

            <button type='submit' className='mx-5 my-1 mt-2 text-white rounded-md bg-blue-950 hover:bg-orange-400'>
                Next
            </button>




        </form>
    </div>
  )
}
