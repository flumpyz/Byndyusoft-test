import React, {useRef, useState} from 'react';
import cx from 'classnames';
import s from './style.module.css';
import calculateMinPairInArraySum from "../../Services/arrayService";

const Index = () => {
    const [inputValue, setInputValue] = useState("");
    const [isIgnoredErrorsMode, setIsIgnoredErrorsMode] = useState(false);
    const textareaElement = useRef();

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleCheckboxChange() {
        setIsIgnoredErrorsMode(!isIgnoredErrorsMode);
    }

    function handleSubmit() {
        let calculateSumResult = calculateMinPairInArraySum(inputValue, isIgnoredErrorsMode);

        if (typeof calculateSumResult !== "string") {
            alert(`Сумма двух минимальных чисел массива : ${calculateSumResult}`);
        } else {
            alert(calculateSumResult);
        }
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
            <h1 className={cx(s.inputFormContainer__title)}>Введите числа массива через запятую :</h1>
            <textarea className={cx(s.inputFormContainer__textarea)}
                      ref={textareaElement}
                      value={inputValue}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}/>

            <label className={cx(s.inputFormContainer__label)}>Режим игнорирования ошибок
                <input type="checkbox" className={cx(s.inputFormContainer__checkbox)} checked={isIgnoredErrorsMode} onChange={handleCheckboxChange}/>
            </label>

            <input className={cx(s.inputFormContainer__submit)} type="submit"/>
        </form>
    );
};

export default Index;