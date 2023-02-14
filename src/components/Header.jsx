
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
function Header({ text, bgColor, textColor }) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: '-100vh' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'spring', bounce: '.5' }}

                >
                    {text}
                </motion.h2>
            </div>
        </header>
    )
}



Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string
}


export default Header