import { BASE_API } from "../utils/constants";

export async function getUserApi(token) {
  try {
    const url = `${BASE_API}api/Users/`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const responde = await fetch(url, params);
    const result = await responde.json();
    return result;
  } catch (error) {
    throw error;
  }
}
