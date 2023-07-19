import styles from './Input.module.css'

function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
  pattern,
  accept
}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        pattern={pattern}
        accept={accept}
        {...(multiple ? { multiple } : '')}
      />
    </div>
  )
}

export default Input
