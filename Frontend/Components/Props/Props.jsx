import React from 'react'
import { useNavigate } from 'react-router'

function Props(props) {

    const navigate = useNavigate();

    return (
        <div>
            <div className='mx-auto  w-25 text-center confirmation-Box'>
                <div className='container my-2a'>
                    <h3>Message</h3><hr />
                </div>
                <div>
                    <h6>{props.message}</h6>
                </div>
                <div>
                    <button onClick={() => navigate(props.url)} className='Submit-Button'>OK</button>
                </div>
            </div>

        </div>
    )
}

export default Props
