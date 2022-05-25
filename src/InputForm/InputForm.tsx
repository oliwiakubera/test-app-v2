import {useState, useEffect, useCallback} from "react";

interface InputFormProps {
    defaultValue?: string;
}
const storageFormKey = 'inputValue';

export const InputForm = (props?: InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('Enter name')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const formReadyToSubmit = !(displayError || !inputValue);

    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                setErrorMessage('User name are to short :(')
            }

            if (messageLength > 20) {
                setErrorMessage('User name are to long :/')
            }

            setDisplayError(true)
        } else {
            setDisplayError(false)
            setErrorMessage('')
        }
    }

    const handleSubmit = useCallback(() => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormKey, inputValue)
        }
    }, [inputValue])

    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData) {
            valueToSet = localStorageData;
        } else {
            if (!!props?.defaultValue) {
                valueToSet = props?.defaultValue;
            }
        }

        setInputValue(valueToSet);
    }, [])

    return <div style={{display: "flex", flexDirection: 'column'}} className="wrapper">
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div className="welcome">Welcome</div>
        <input className="formInput"  onInput={handleInputChange} value={inputValue} type="text" placeholder="Username"/>
        <br/>
        <button className="submitButton" onClick={handleSubmit} disabled={!formReadyToSubmit}>Submit</button>
    </div>
}