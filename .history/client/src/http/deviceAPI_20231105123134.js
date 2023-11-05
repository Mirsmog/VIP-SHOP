import { $host, $authHost } from '.';
import { jwtDecode } from 'jwt-decode';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.post('api/type');
  return data;
};

export const check = async () => {
  if (localStorage.getItem('token')) {
    try {
      const { data } = await $authHost.get('api/user/auth');
      localStorage.setItem('token', data.token);
      return jwtDecode(data.token);
    } catch (error) {
      console.error(`error during check token ${error}`);
    }
  }
};
