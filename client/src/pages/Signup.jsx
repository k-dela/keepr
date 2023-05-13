import { Form, useActionData, redirect } from "react-router-dom"
import supabase from "../supabase";

export const signupAction = async ({request}) => {
    let formData = await request.formData();
    let email = formData.get("email");
    let password = formData.get("password");
    
    console.log(email, password);

    const {data, error} = await supabase.auth.signUp({
        email,
        password
    });

    if(error) {
        console.log(error);
        return error.message;
    }


    return redirect("/login");
}
export default function Signup() {
    const actionData = useActionData();

    return (
        <div>
            <h1>Sigup</h1>
            
            <p>{JSON.stringify(actionData)}</p>
            <div>
                <Form method="post">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required  minLength={8}/>
                    </div>
                    <div>
                        <button>
                            Sign Up
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}