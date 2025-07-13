import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  'aria-label': ariaLabel,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-xl transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent'
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'glass text-white border border-white/20 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  const ButtonComponent = motion.button
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {!disabled && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.a>
    )
  }
  
  return (
    <ButtonComponent
      className={classes}
      onClick={disabled ? undefined : onClick}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      aria-label={ariaLabel}
      disabled={disabled}
      type={type}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </ButtonComponent>
  )
}

export default Button
