import { LockClosedIcon } from "@radix-ui/react-icons";
import Input from "./Input";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'
import { useDispatch } from "react-redux";
import { googleAuthentication, signIn, signUp } from "../../store/actions/authActions";
import { useNavigate } from 'react-router';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
function Auth() {
    const [formData, setFormData] = useState(initialState)

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    const handleIsSignUp = (bool) => {
        setIsSignUp(bool)
        setShowPassword(false)
        setFormData(initialState)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signUp(formData, navigate))
        } else {
            dispatch(signIn(formData, navigate))

        }

    }


    return (

        <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <div className="flex flex-col items-center">
                    <LockClosedIcon className="w-10 h-10 text-blue-500" />
                    <h2 className="mt-2 text-xl font-semibold">
                        {isSignup ? "Sign Up" : "Sign In"}
                    </h2>
                </div>
                <form className="mt-4" onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                            <Input type="text" name="firstName" label="First Name" handleChange={handleChange} />
                            <Input type="text" name="lastName" label="Last Name" handleChange={handleChange} />
                        </>
                    )}
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        handleChange={handleChange}
                        placeholder="Your email"
                    />
                    <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        label="Password"
                        handleChange={handleChange}
                        handleShowPassword={handleShowPassword}
                    />
                    {isSignup && (
                        <Input
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            handleChange={handleChange}
                        />
                    )}
                    <GoogleLogin onSuccess={credentialResponse => {
                        const token = credentialResponse.credential;
                        const result = jwtDecode(credentialResponse.credential);
                        dispatch(googleAuthentication({ token, result }));
                        navigate('/')
                    }}
                        onError={() => {
                            console.log('Login Failed');
                        }} />
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                    >
                        {isSignup ? "Sign Up" : "Sign In"}
                    </button>
                    <div className="mt-2">
                        <div>{isSignup ? <p>Already have an account ? <span onClick={() => handleIsSignUp(false)} className="text-blue-500 font-semibold hover:opacity-90 cursor-pointer">Sign In</span></p> : <p>Don&apos;t have an account ? <span onClick={() => handleIsSignUp(true)} className="text-blue-500 font-semibold hover:opacity-90 cursor-pointer">Sign Up</span> </p>}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;

