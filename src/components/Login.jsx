'use client'
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [passwordShow, setPasswordShow] = useState(false);
    const [login, setLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter();

    const handleBack = (e) => {
        e.preventDefault();
        router.back();
    }

    async function formSubmit(e) {
        e.preventDefault();

        if (!login && password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }

        try {
            const res = await fetch(`/api/user/${login ? 'login' : 'signup'}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log(data);

            if (data.success) {
                localStorage.setItem('LoginId', data.LoginId);
                router.push('/');
                alert('User signed in');
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (err) {
            console.error(err);
            alert('Network or server error');
        }
    }

    return (
        <div className="relative h-screen flex justify-center items-center bg-cover bg-center">
            <form onSubmit={formSubmit} className="absolute bg-[rgba(255,255,255,0.15)] backdrop-blur-md p-8 sm:rounded-2xl space-y-6 w-[90%] sm:max-w-md shadow-lg">

                {/* Back Arrow */}
                <button type="button" onClick={handleBack} className="px-2">
                    <FaArrowLeft className="text-3xl rounded-full p-1.5 text-white cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition" />
                </button>

                {/* Title */}
                <div className="px-2">
                    <h1 className="text-3xl  text-white tracking-wide">LUXELOOM</h1>
                </div>

                {/* Inputs */}
                <div className="space-y-5 px-2">
                    {/* Email */}
                    <label className="relative block">
                        <span className="absolute -top-3 left-2 text-white text-sm bg-[rgba(0,0,0,0.7)] px-1 rounded-md">
                            Email
                        </span>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="w-full p-3 text-white border border-white rounded-lg bg-transparent focus:border-blue-300 outline-none"
                        />
                    </label>

                    {/* Password */}
                    <label className="relative block">
                        <span className="absolute -top-3 left-2 text-white text-sm bg-[rgba(0,0,0,0.7)] px-1 rounded-md">
                            Password
                        </span>
                        <input
                            name='password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}

                            type={passwordShow ? "text" : "password"}
                            className="w-full p-3 text-white border border-white rounded-lg bg-transparent focus:border-blue-300 outline-none pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordShow(!passwordShow)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                        >
                            {passwordShow ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </label>
                    {/* Confirm Pasword  */}
                    {login ? '' :
                        <label className="relative block">
                            <span className="absolute -top-3 left-2 text-white text-sm bg-[rgba(0,0,0,0.7)] px-1 rounded-md">
                                Confirm Password
                            </span>
                            <input
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}

                                type={passwordShow ? "text" : "password"}
                                className="w-full p-3 text-white border border-white rounded-lg bg-transparent focus:border-blue-300 outline-none pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordShow(!passwordShow)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                            >
                                {passwordShow ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </label>
                    }
                </div>

                {/* Signup link */}
                <div className="flex justify-center space-x-2 text-white">
                    <h4 className="text-md">{login ? 'New' : 'Old'} to LuxeLoom?</h4>
                    <button type="button" onClick={() => { setLogin(!login) }} className="text-md text-blue-200 cursor-pointer underline">{login ? 'Sign Up' : 'Login'}</button>
                </div>

                {/* Login button */}
                <div>
                    <button
                        type="submit"
                        className="rounded-full py-3 text-xl bg-[rgba(255,255,255,0.3)] text-white w-full cursor-pointer hover:bg-[rgba(255,255,255,0.4)] transition"
                    >
                        {login ? 'Login' : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    );
}
