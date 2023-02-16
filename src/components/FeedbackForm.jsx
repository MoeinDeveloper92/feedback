import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10);

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    // when something changes inside editfeedcback, useEffect comes into play
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            // if there is nothing in text there is no point to show the message
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text Must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedbackEdit.edit === true) {
            const newFeedback = {
                text,
                rating
            }
            updateFeedback(feedbackEdit.item.id, newFeedback)
            feedbackEdit.edit = false
        } else if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)
        }
        setText('')
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <motion.h2
                    initial={{ x: '-100vh', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', bounce: .5 }}
                >
                    <h2>How would you rate your service with Us?</h2>
                </motion.h2>

                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder='Write a review'
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm