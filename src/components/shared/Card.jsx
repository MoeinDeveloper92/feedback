import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Card({ children }) {
    const [reverse, setReverse] = useState(true)

    const handleclick = (e) => {
        setReverse(pre => !pre)
    }
    return (
        <div className={`card ${reverse && 'reverse'}`}>
            {children}
            <button className={`btn-${reverse ? 'secondary' : 'primary'}`} onClick={handleclick}>Toggle Theme</button>
        </div>
    )
}





Card.propTypes = {
    children: PropTypes.node.isRequired,

}
export default Card