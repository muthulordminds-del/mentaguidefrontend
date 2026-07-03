import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true

    axios.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => Promise.reject(error));

    const backendUrl = (import.meta.env.VITE_BASE_URL || 'https://mentaguide.vercel.app/').replace(/\/$/, '')
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'))
    const [userData, setUserData] = useState(false)

    const getAuthState = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/auth/is-auth')
            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
            } else {
                localStorage.removeItem('token')
                setIsLoggedIn(false)
                setUserData(false)
            }

        } catch (error) {
            if (error.response?.status === 401 || error.response?.status === 400) {
                localStorage.removeItem('token')
                setIsLoggedIn(false)
                setUserData(false)
                return
            }

            console.error('Error in getAuthState:', error);
            toast.error(error.response?.data?.message || 'Error checking auth state');
        }
    }

    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/data')
            data.success ? setUserData(data.userData) : toast.error(data.message)

        } catch (error) {
            if (error.response?.status === 401 || error.response?.status === 400) {
                localStorage.removeItem('token')
                setIsLoggedIn(false)
                setUserData(false)
                return
            }

            console.error('Error in getUserData:', error);
            toast.error(error.response?.data?.message || 'Error fetching user data');
        }
    }

    useEffect(() => {
        getAuthState()
    }, [])

    const value = {
        backendUrl,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        getUserData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
};
