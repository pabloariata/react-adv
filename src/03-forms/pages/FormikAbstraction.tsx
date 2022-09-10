import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MyTextInput, MyCheckbox, MySelect } from '../components';

import '../styles/styles.css';



export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, 'Must have 15 or less characters').required('Required'),
                    lastName: Yup.string().max(15, 'Must have 15 or less characters').required('Required'),
                    email: Yup.string().email('Must provide a valid email address').required('Required'),
                    terms: Yup.boolean().oneOf([true], 'Must accept the terms'),
                    jobType: Yup.string().required('Required').notOneOf(['it-jr'], "Can't continue as an it-jr")
                })}
            >

                {
                    (formik) => (
                            <Form>
                                <MyTextInput label="First Name" name="firstName" placeholder='Enter your first name'/> 
                               
                                <MyTextInput label="Last Name" name="lastName" placeholder='Enter your last name'/> 
                            
                                <MyTextInput type="email" label="Email Address" name="email" placeholder='email@google.com'/> 

                                <MySelect label="Job Type" name="jobType">
                                    <option value="">Pick something</option>
                                    <option value="developer">developer</option>
                                    <option value="designer">designer</option>
                                    <option value="it-senior">it-senior</option>
                                    <option value="it-jr">it-jr</option>
                                </MySelect>

                                <MyCheckbox label='Terms and conditions' name='terms'/>

                                <button type="submit">Submit</button>

                            </Form>
                    )
                }


            </Formik>

            
        </div>
    )
}
