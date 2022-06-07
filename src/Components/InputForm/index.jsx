import React, {useState} from 'react';
import cx from 'classnames';
import s from './style.module.css';

const Index = () => {
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <form className={cx(s.inputFormContainer)}>
            <p className={cx(s.inputFormContainer__title)}>Input value : {inputValue}</p>
            <textarea className={cx(s.inputFormContainer__textarea)} value={inputValue} onChange={handleChange}/>

            <input className={cx(s.inputFormContainer__submit)} type="submit"/>
        </form>
    );
};

export default Index;