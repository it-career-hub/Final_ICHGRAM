import React, { CSSProperties } from 'react';
import s from './customInput.module.css';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  errorMessage?: string;
  type?: 'text' | 'password' | 'email';
  className?: string;
  style?: CSSProperties; 
  showError?: boolean; // Сделайте это свойство необязательным

}

// Компонент CustomInput
const CustomInput: React.FC<InputProps> = ({
  placeholder = '',
  value = '',
  onChange,
  icon,
  errorMessage,
  type = 'text',
  className = '',
  style = {},
}) => {

  // Обработчик изменений
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  // Класс для поля инпута с учетом ошибки
  const inputClass = `${s.inputContainer} ${errorMessage ? s.error : ''} ${className}`;

  return (
    <div className={inputClass}>
      {icon && <span className={s.icon}>{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}  // Используем переданное значение напрямую
        onChange={handleInputChange}  // Используем переданный обработчик
        className={s.input}
        style={style} 
      />
      {errorMessage && <div className={s.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default CustomInput;
