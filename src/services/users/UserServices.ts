import axios, { AxiosError } from "axios";
import { Endpoint } from "../../helpers/endpoints";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

export const loginUser = async (email: string, password: string) => {
  const requestBody = {
    email: email,
    password: password,
  };
  try {
    const response = await axios.post(
      `${baseUrl}${Endpoint.login}`,
      requestBody
    );
    return response;
  } catch (e: any) {
    if (e instanceof AxiosError) {
      console.error(e.message);
    } else {
      console.error({ message: e.message });
    }
    throw e;
  }
};
