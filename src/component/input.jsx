import React from 'react'

export default function input() {
    return (
        <div className='signup-input-box'>
            <input className='input' type={"text"} placeholder="Your Email" />
            <div className='signup-button'>
                Subscribe
            </div>
        </div>
    )
}
