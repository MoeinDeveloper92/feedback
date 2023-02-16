import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();





export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetchFeedback();
    }, [])



    const fetchFeedback = async () => {
        const res = await fetch(`http://localhost:52208/feedback?_sort=id&_order=desc`);
        const data = await res.json();
        console.log(data);
    }


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // delete function
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter(
                item => item.id !== id
            ))
        }
    }

    // addFeedback

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }



    // Update Feedback Item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => {
            if (item.id === id) {
                return { ...item, ...updItem }
            } else {
                return item
            }
        }))
    }





    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext