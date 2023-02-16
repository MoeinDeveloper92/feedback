import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();





export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetchFeedback();
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json();
        setFeedback(data)
        setIsLoading(false)
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
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(`/feedback/id`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter(
                item => item.id !== id
            ))
        }
    }

    // addFeedback

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json();
        // when we add, then we make a request and get bak data from the server
        setFeedback([data, ...feedback])
    }



    // Update Feedback Item
    const updateFeedback = async (id, updItem) => {

        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => {
            if (item.id === id) {
                return { ...item, ...data }
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
            updateFeedback,
            isLoading
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext