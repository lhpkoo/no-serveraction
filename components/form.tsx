"use client"

import { create } from "@/actions/create";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";


export const Form = () => {
    const initState = { message: null, errors: {} };
    const [ state , dispatch ] = useFormState( create, initState );

    return (
    <form action={dispatch}>
        <FormInput errors={state?.errors} />

        <FormButton />
    
    </form>


    )


}
