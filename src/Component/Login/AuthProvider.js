import React from 'react';
import { createContext } from 'react';
import useFarebase from './useFarebase';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const allcontext = useFarebase()
    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;