import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIcon from './components/AboutIcon'
import { Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'


const App = () => {
  
    return (
        <FeedbackProvider>
            <Header />
            <Routes>
                <Route path='/' element={
                    <div className='container'>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                        <AboutIcon />
                    </div>
                } />
                <Route path='/about' element={<About />} />
            </Routes>

        </FeedbackProvider>
    )
}


export default App