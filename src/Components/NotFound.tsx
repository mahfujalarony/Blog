import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <button 
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 mr-0 sm:mr-4 mb-4 sm:mb-0"
                    >
                        Go Back
                    </button>
                    <button 
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                        Home Page
                    </button>
                </div>
                
                <div className="mt-12">
                    <svg className="mx-auto h-24 w-24 sm:h-32 sm:w-32 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.09M6.343 6.343L4.222 4.222m15.556 0L17.657 6.343M4.222 19.778l2.121-2.121m15.556 0l-2.121-2.121" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default NotFound
