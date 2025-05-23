import {useForm} from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from  "@/components/ui/input"
import {fetchHotelsRequest} from "@/store/hotels/hotelsSlice.js";
import {useDispatch} from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm()
    const onSubmit = (values) => {
        dispatch(fetchHotelsRequest(values))
        console.log(values);
    }
    return (
        <section>
            <h2 className={'text-3xl fond-bold text-yellow-400 mb-6'}>Знайдіть свій ідеальний готель</h2>

            <form onSubmit={handleSubmit(onSubmit)} className={'grid gap-4'}>
                <Input type="text" placeholder={'City'} {...register('city')} />
                <Input type="number" placeholder={'Hotel rating'} {...register('rating')} />
                <Button label="Search" type="submit" />
            </form>
        </section>
    )
}

export default HomePage