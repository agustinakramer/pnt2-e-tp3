
import axiosInstance from '@/axios'; 

export const getUsers = () => {
  return axiosInstance.get('/users');
};
