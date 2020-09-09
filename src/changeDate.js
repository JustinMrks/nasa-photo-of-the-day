import React from 'react'

const ChangeDate = ({ setDate }) => {
    return(
        <button onClick={() => setDate('2016-04-05')}>Change Date</button>
    )
}

export default ChangeDate