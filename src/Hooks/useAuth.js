import { useContext } from 'react';
import { AuthContext } from '../Auth Provider/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;