import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text" placeholder="First Name"/>
                                <ErrorMessage name='firstName' component="span"/>

                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type="text" />
                                <ErrorMessage name='lastName' component="span"/>

                                <label htmlFor="email">Email Address</label>
                                <Field name="email" type="email"/>
                                <ErrorMessage name='email' component="span"/>

                                <label htmlFor="jobType">Job Type</label>
                                <Field name="jobType" as="select">
                                    <option value="">Pick something</option>
                                    <option value="developer">developer</option>
                                    <option value="designer">designer</option>
                                    <option value="it-senior">it-senior</option>
                                    <option value="it-jr">it-jr</option>
                                </Field>
                                <ErrorMessage name='jobType' component="span"/>

                                <label>
                                <Field name="terms" type="checkbox" />
                                    Terms and conditions
                                    </label>                                
                                <ErrorMessage name='terms' component="span"/>



                                <button type="submit">Submit</button>

                            </Form>
                    )
                }


            </Formik>

            
        </div>
    )
}
