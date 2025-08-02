import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setCode(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Dummy OTP for demo
        const correctOTP = "123456";

        if (code === correctOTP) {
            // ✅ Navigate to success page
            navigate("/new_password"); // Replace with your route
        } else {
            setError("Invalid verification code. Please try again.");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <section className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:pb-10">
                <header className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Enter The Code</h1>
                </header>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="sr-only">Verification Code</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={code}
                            onChange={handleChange}
                            placeholder="Enter your code"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </label>

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md text-lg transition-colors"
                    >
                        Verify
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Otp;
