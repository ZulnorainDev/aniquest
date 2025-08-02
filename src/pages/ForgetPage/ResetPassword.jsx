import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ResetPassword = () => {

    const [email, setemail] = useState("");
 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/otp")
    };


    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <section className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:pb-10">
                {/* Page Header */}
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Get a new password</h1>
                </header>

                {/* Reset Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Reset password form">


                    <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors"
                    >
                        Get Code
                    </button>
                </form>
            </section>
        </main>
    );
};

export default ResetPassword;
