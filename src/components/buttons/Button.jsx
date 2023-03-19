import styles from './Button.module.css';

const Button = ({
  as: Btn = 'button',
  children,
  variant,
  icon,
  onClick = () => {},
}) => {
  return (
      <Btn onClick={onClick} className={`${styles.btn} ${styles[variant]}`}>
          {children}<span>{icon}</span>      
    </Btn>
  );
};

export default Button;