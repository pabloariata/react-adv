import { useField, ErrorMessage } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any; // Comodin para agregarle cualquier cantidad de parametros adicionales
}

export const MyCheckbox = ({ label, ...props }: Props) => {

    const [field] = useField({...props, type:'checkbox'});

    return (
        <>
            <label>
                { label }
                <input type="checkbox" {...field} {...props}/>
            </label>
            <ErrorMessage name={props.name} component="span"/>
        </>
    )
}
