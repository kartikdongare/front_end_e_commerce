/* eslint-disable @typescript-eslint/no-explicit-any */
import yup from 'yup'

export function formValidation(password:any){
    const Validation=yup.object().shape({
        name:yup.string().min(2).max(10).required(),
        email:yup.string().matches(/@[^.]*|\./).required('mail must be valid format'),
        number:yup.number().moreThan(10).required(),
        password:yup.string().matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/).required('password shoud be in valid format'),
        consfirmPassword:yup.string().equals(password).required('confirm password must be same as before password'),
        check:yup.boolean().oneOf([true],'Please accept term and condition')
    })
    return Validation
}
