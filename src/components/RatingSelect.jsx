import Reactو, { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useState } from 'react'


function RatingSelect({ select }) {
    const [selected, setSelected] = useState(2)
    const { feedbackEdit } = useContext(FeedbackContext)


    const handleChange = (e) => {
        setSelected(+e.target.value)
        select(+e.target.value)
    }

    // whenevr feedback edit changes ,then run this sideEffect
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    // NOTE: simplified with iteration
    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect