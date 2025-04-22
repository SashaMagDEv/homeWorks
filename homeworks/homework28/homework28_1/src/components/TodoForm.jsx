import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoSchema = Yup.object().shape({
    task: Yup.string()
        .min(5, 'Мінімум 5 символів')
        .required('Поле обовʼязкове'),
});

const TodoForm = ({ addTodo }) => {
    return (
        <Formik
            initialValues={{ task: '' }}
            validationSchema={TodoSchema}
            onSubmit={(values, { resetForm }) => {
                addTodo(values.task);
                resetForm();
            }}
        >
            {() => (
                <Form>
                    <Field
                        type="text"
                        name="task"
                        placeholder="Введіть завдання"
                    />
                    <ErrorMessage name="task" component="div" style={{ color: 'red' }} />
                    <button type="submit">Додати</button>
                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;