import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { registerInputs, loginInputs } from '../data/formInputs'
import style from './form.module.css'
import { AiOutlineDownload } from 'react-icons/ai'

const Form = ({ variant }) => {
    const [formData, setFormData] = useState({})
    const [picture, setPicture] = useState({ name: null })
    const location = useLocation()
    const formRef = useRef()
    useEffect(() => {
        formRef.current.reset()
        setFormData({})
    }, [location])

    let inputs = null
    let buttonText = null
    switch (variant) {
        case 'Register Form':
            buttonText = 'Register Me!'
            inputs = registerInputs
            break
        case 'Login Form':
            buttonText = 'Log Me In!'
            inputs = loginInputs
            break
        default:
            break
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

    const handlePhoto = (event) => {
        setPicture(event.target.files[0])
    }
  
    const renderInputs = ({ id, name, type, placeholder, message }) => {
        if(type === 'file') {
            return(
                <div key={name} className={style.container}>
                    <p className={style.label}>{message}</p>
                    <label className={style.fileInput}>
                        <input 
                            className='fileInput' 
                            name={name} 
                            type='file' 
                            onChange={handlePhoto}
                        />
                        Upload File <AiOutlineDownload />
                    </label>
                    <p className={style.label}>{picture.name ? 'File successfully uploaded!' : 'No filed uploaded...'}</p>
                </div>
            )
        }
        return(
            <div key={id} className={style.container}>
                <label htmlFor={name} className={style.label}>{message}</label><br />
                <input 
                    type={type} 
                    onChange={handleChange} 
                    placeholder={placeholder} 
                    name={name} 
                    autoComplete='off' 
                    className={style.input} 
                />
            </div>        
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
  

    return (
        <div className={style.form}>
            <form onSubmit={handleSubmit} ref={formRef}>
                <h1 className={style.heading}>{variant}</h1>
                {inputs.map(input => renderInputs(input))}        
                <button>{buttonText}</button>
            </form>
        </div>
    )
}

  
export default Form