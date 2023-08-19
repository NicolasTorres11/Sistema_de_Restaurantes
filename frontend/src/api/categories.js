import { BASE_API } from "../utils/constants";

export async function getCategoriesApi() {
  try {
    const url = `${BASE_API}api/Categories/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}


export async function createCategoryApi(data, token) {
  try {
    const formData = new FormData();

    formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("is_active", data.is_active);

    const url = `${BASE_API}api/Categories/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateCategoryApi(id, data, token) {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    if (data.image) formData.append("image", data.image);
    formData.append("is_active", data.is_active);

    const url = `${BASE_API}api/Categories/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}


export async function deleteCategoryApi(id, token) {
  try {
    const url = `${BASE_API}api/Categories/${id}/`;
    const params = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}