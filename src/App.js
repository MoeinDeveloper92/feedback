import Header from './components/Header'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIcon from './components/AboutIcon'
import { Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'


const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)


    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter(
                item => item.id !== id
            ))
        }
    }



    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }




    return (
        <FeedbackProvider>
            <Header />
            <Routes>
                <Route path='/' element={
                    <div className='container'>
                        <FeedbackForm
                            handleAdd={addFeedback}
                        />
                        <FeedbackStats/>
                        <FeedbackList
                            handleDelete={deleteFeedback}
                        />
                        <AboutIcon />
                    </div>
                } />
                <Route path='/about' element={<About />} />
            </Routes>

        </FeedbackProvider>
    )
}


export default App