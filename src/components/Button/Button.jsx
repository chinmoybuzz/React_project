import styles from "./Button.module.css";

const Button = ({isOutline,text,icon}) => {

  return (
    <button className={isOutline ? styles.Outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
