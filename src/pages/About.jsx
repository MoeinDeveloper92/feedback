import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function About() {
    return (
        <Card>
            <motion.div
                initial={{ opacity: 0, y: '-100vh' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: '.3' }}
            >
                <div className='about'>
                    <h1>About this project</h1>
                    <p>This is a React app to leave feedback for a product or service</p>
                    <p>Version: 1.0.0</p>
                </div>
                <Link to={"/"}>Back to Home</Link>
            </motion.div>

        </Card>
    )
}

export default About