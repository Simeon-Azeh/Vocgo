/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FcGoogle } from "react-icons/fc";
import Footer from '../../components/Footer';
import { login } from '../../services/apiService'; // Import the login function
import Loader from '../../components/Loader/Loader'; // Import the Loader component

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading

  const validateForm = () => {
    let formErrors = {};
    
    // Email validation
    if (!email) {
      formErrors.email = t('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = t('Email is invalid');
    }

    // Password validation
    if (!password) {
      formErrors.password = t('Password is required');
    } else if (password.length < 6) {
      formErrors.password = t('Password must be at least 6 characters long');
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true); // Show loader
      try {
        const data = await login(email, password);
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate('/dashboard'); // Redirect to dashboard
        }
      } catch (error) {
        setApiError(error.error || 'Invalid Credentials');
      } finally {
        setLoading(false); // Hide loader
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9f9] dark:bg-dark-body transition-colors py-12 px-4 sm:px-6 lg:px-8 font-inter">
      {loading && <Loader />} {/* Show loader when loading */}
      <div className="w-full max-w-md p-6 space-y-8 bg-white rounded-md">
        <div>
          <h2 className="mt-6 text-3xl font-semibold text-center text-gray-900 dark:text-slate-50 font-montserrat-alt">
            {t('Login to your account')}
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
            {t("Or")} <Link to="/register" className="font-medium text-[#95b627] hover:text-[#b8d865]">{t('create a new account')}</Link>
          </p>
        </div>

        <form className="mt-8 space-y-6 font-inter" onSubmit={handleLogin} noValidate>
          <div className="rounded-md shadow-sm ">
            <div>
              <label htmlFor="email" className="sr-only">{t('Email address')}</label>
              <div className="relative">
                <FaUser className="absolute z-50 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`appearance-none rounded-md relative block w-full px-10 py-3 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300 border-solid'
                    } placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-[#222222] focus:outline-none focus:ring-[#D1EC79] focus:border-[#D1EC79] sm:text-sm`}
                    placeholder={t('Email address')}
                />

              </div>
              {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
              {apiError && <p className="mt-2 text-xs text-red-500">{apiError}</p>}
            </div>

            <div className="mt-2">
              <label htmlFor="password" className="sr-only">{t('Password')}</label>
              <div className="relative">
                <FaLock className="absolute z-50 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`appearance-none rounded-md relative block w-full px-10 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 border-solid'
                } placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-[#222222] focus:outline-none focus:ring-[#D1EC79] focus:border-[#D1EC79] sm:text-sm`}
                placeholder={t('Password')}
                />
              </div>
              {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-[#D1EC79] border-gray-300 rounded focus:ring-[#D1EC79] dark:bg-[#222222]"
              />
              <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900 dark:text-gray-400">
                {t('Remember me')}
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-[#D1EC79] hover:text-[#b8d865]">
                {t('Forgot your password?')}
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-[#D1EC79] hover:bg-[#b8d865] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1EC79] mb-4"
            >
              {t('Login')}
            </button>
                  
            <span
              onClick={() => {alert("Clicked")}}
              className="flex items-center justify-center w-full gap-2 py-2 mt-2 font-medium text-center text-black border rounded cursor-pointer"
            >
                <FcGoogle size={24} />
              {t('Continue with Google')}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;