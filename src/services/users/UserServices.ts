import axios, { AxiosError } from "axios";
import { Endpoint } from "../../helpers/endpoints";
import { UserFactory } from "../../factory/UserFactory";
import { User } from "../../models/User";

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

export const postUserData = async (): Promise<User> => {
  const token = localStorage.getItem("auth_token");
  try {
    const response = await axios.post(
      `${baseUrl}${Endpoint.userData}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": `application/json`,
          Accept: `application/json`,
        },
      }
    );
    return UserFactory.createUserFromJson(response.data.body);
  } catch (e: any) {
    if (e instanceof AxiosError) {
      console.error(e.message);
      if(e.response?.status === 401) {
        localStorage.clear();
      }
    } else {
      console.error({ message: e.message });
    }
    throw e;
  }
};

export const editUserProfile = async (firstName: string, lastName: string) => {
  const requestBody = {
    firstName: firstName,
    lastName: lastName,
  };
  const token = localStorage.getItem("auth_token");
  try {
    await axios.put(`${baseUrl}${Endpoint.editUserProfile}`, requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `application/json`,
        Accept: `application/json`,
      },
    });
  } catch (e: any) {
    if (e instanceof AxiosError) {
      console.error(e.message);
      if(e.response?.status === 401) {
        localStorage.clear();
      }
    } else {
      console.error({ message: e.message });
    }
    throw e;
  }
};
