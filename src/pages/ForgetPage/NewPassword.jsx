import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
    const [form, setForm] = useState({
        newPassword: "",
        confirmPassword: "",
    });

    const [error, seterror] = useState()

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.newPassword !== form.confirmPassword) {
            seterror("Passwords do not match.");
            return;
        }

        alert("Password reset:", form.newPassword);
        navigate('/login')
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
                    <label className="block">
                        <span className="sr-only">New Password</span>
                        <input
                            type="password"
                            name="newPassword"
                            required
                            placeholder="New Password"
                            value={form.newPassword}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>

                    <label className="block">
                        <span className="sr-only">Confirm Password</span>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            placeholder="Repeat Password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors"
                    >
                        Verify
                    </button>
                </form>
            </section>
        </main>
    );
};

export default NewPassword;
