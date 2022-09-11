
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    // const { formData, name, email, password1, password2, onChange, resetForm, isValidEmail } = useForm({
    //     name: '',
    //     email: '',
    //     password1: '',
    //     password2: ''
    // });

    // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(formData);
    // }

    return (
        <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string().min(3, 'Must have 3 or more characters').required('Required'),
                    email: Yup.string().email('Must provide a valid email address').required('Required'),
                    password1: Yup.string().min(6, 'At least 6 characters').required('Required'),
                    password2: Yup.string().required('Required').oneOf([Yup.ref('password1'), ''], 'Passwords are different').required('Requuired')
                })}
            >

                {
                    ({handleReset}) => (
                            <Form>
                                <MyTextInput label="First Name" name="name" placeholder='Enter your first name'/> 
                            
                                <MyTextInput type="email" label="Email Address" name="email" placeholder='Type your email'/> 

                                <MyTextInput type="password" label="Password" name="password1" placeholder='******'/> 

                                <MyTextInput type="password" label="Confirm password" name="password2" placeholder='Repeat password'/> 

                                <button type="submit">Submit</button>

                                <button type="button" onClick={handleReset}>Reset Form</button>

                            </Form>
                    )
                }


            </Formik>
    )
}
