import React from 'react';
import { useForm } from 'react-hook-form';

const TodoForm = ({ addTodo }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        addTodo(data.text);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('text', {
                    required: 'поле обовʼязкове',
                    minLength: {
                        value: 5,
                        message: 'мінімум 5 символів'
                    }
                })}
                placeholder="Нове завдання"
            />
            {errors.text && <div style={{ color: 'red' }}>{errors.text.message}</div>}
            <button type="submit">Додати</button>
        </form>
    );
};

export default TodoForm;