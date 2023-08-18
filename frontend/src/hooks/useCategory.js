import { useState } from "react";
import {
  getCategoriesApi,
  createCategoryApi,
  updateCategoryApi,
} from "../api/categories";
import { useAuth } from "./";

export function useCategory() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState(null);
  const { auth } = useAuth();
  const getCategories = async () => {
    try {
      setloading(true);
      const response = await getCategoriesApi();
      setloading(false);
      setCategories(response);
    } catch (error) {
      setloading(false);
      setError(error);
    }
  };

  const createCategories = async (data) => {
    try {
      setloading(true);
      await createCategoryApi(data, auth.token);
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(error);
    }
  };

  const updateCategories = async (id, data) => {
    try {
      setloading(true);
      await updateCategoryApi(id, data, auth.token);
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(error);
    }
  };

  return {
    loading,
    categories,
    error,
    getCategories,
    createCategories,
    updateCategories,
  };
}
