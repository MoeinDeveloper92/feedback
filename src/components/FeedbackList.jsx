import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if (!isLoading && (feedback.length === 0 || !feedback)) {
        return <p>No Feedback Yet...</p>
    }

    return isLoading ? <Spinner /> : (<div className='feedback-list'>
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
        </AnimatePresence>
    </div>)

}


export default FeedbackList