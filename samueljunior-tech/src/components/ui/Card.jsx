import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  variant = 'glass',
  hover = true,
  ...props 
}) => {
  const variants = {
    glass: 'glass',
    'glass-light': 'glass-light',
    'glass-strong': 'glass-strong',
    solid: 'bg-white/5 border border-white/10 rounded-2xl'
  }
  
  const hoverClasses = hover ? 'card-hover cursor-pointer' : ''
  const classes = `${variants[variant]} ${hoverClasses} ${className}`
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
