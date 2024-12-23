import React from "react";

const NoPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 font-inter">
                    404
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 font-inter mt-4">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <div className=" flex justify-center gap-4"><a
                    href="/"
                    className="mt-6 inline-block bg-blue-600 text-white font-medium text-sm px-6 py-3 rounded hover:bg-blue-700 font-inter transition-colors duration-200"
                >
                    Go Back to Home
                </a>
                    <a
                        href="/dashboard"
                        className="mt-6 inline-block bg-blue-600 text-white font-medium text-sm px-6 py-3 rounded hover:bg-blue-700 font-inter transition-colors duration-200"
                    >
                        Go to Dashboard
                    </a></div>
            </div>
        </div>
    );
};

export default NoPage;
