import React, {useEffect, useRef, useState} from 'react';
import cx from 'classnames';
import s from './style.module.css';
import {calculateMinPairInArraySum} from "../../Services/arrayService";

const Index = () => {
    const [inputValue, setInputValue] = useState("");
    const textareaElement = useRef();

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        calculateMinPairInArraySum(inputValue);
        setInputValue("");
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSubmit();
            event.target.blur();
            event.preventDefault();
        }
    }

    return (
        <form className={cx(s.inputFormContainer)} onSubmit={handleSubmit}>
            <h1 className={cx(s.inputFormContainer__title)}>Введите числа массива через запятую</h1>
            <h1 className={cx(s.inputFormContainer__title)}>Input value : {inputValue}</h1>
            <textarea className={cx(s.inputFormContainer__textarea)}
                      ref={textareaElement}
                      value={inputValue}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}/>

            <input className={cx(s.inputFormContainer__submit)} type="submit"/>
        </form>
    );
};

export default Index;