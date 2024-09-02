import React from 'react'
import { useForm } from '@formspree/react';

import "./SecFrom.css"
const SecFrom = () => {
    const [state, handleSubmit, reset] = useForm('xgvwqewp');
    if (state.submitting) {
        return <p>Submitting…</p>;
    }

    if (state.succeeded) {
        return (
            <div>
                <p>Thank you for registering. We will contact you for further details.</p>;<button onClick={reset}>Continue</button>
            </div>
        );
    }

    return (
        <div className='registration'>
        <div className='MainBody'>
            <div className='shapely'>
            <div className='Formtitle'>
                <h1>Save A Seat</h1>
                </div>
            <form onSubmit={handleSubmit}>
                <div className='horizontal'>
                <div className='Feldfr'>
                <label htmlFor="fields">FIRST NAME</label>
                <input
                    className='shorterinput'
                    id="Firstname"
                    type="text"
                    name="Name_1"
                    placeholder="e.g Johnathan"
                />
                </div>
                <div className='Feldfr'>
                <label htmlFor="email">LAST NAME</label>
                <input
                    className='shorterinput'
                    id="Lastname"
                    type="text"
                    name="Name_2"
                    placeholder="e.g Doeby"
                />
                </div>
                </div>
                <div className='Feldfr'>
                <label htmlFor="email">EMAIL</label>
                <input
                    className='Longerinput'
                    id="email"
                    type="email"
                    name="email"
                    placeholder="e.g test@etranzact.com"
                />
                </div>
                <div className='Feldfr'>
                <label htmlFor="email">PHONE NUMBER</label>
                <input
                    className='Longerinput'
                    id="phone"
                    type="tel"
                    name="Number"
                    placeholder="e.g 08012300045"
                />
                </div>
                <div className='Feldfr'>
                <label htmlFor="email">ORGANIZATION</label>
                <input
                    className='Longerinput'
                    id="Organizations"
                    type="text"
                    name="Organization"
                    placeholder="e.g etranzact"
                />
                </div>
                <div className='Feldfr'>
                <label htmlFor="email">ROLE</label>
                <input
                    className='Longerinput'
                    id="Role"
                    type="text"
                    name="Role"
                    placeholder="e.g Cheif Technology Officer"
                />
                </div>
                <div className='buttondiv'>
                <button type="submit">Save A Spot!</button>
                </div>
                
            </form>
            </div>
        </div>
        </div>
    );
}

export default SecFrom