import { useState } from "react";
import { getCategoriesApi } from "../api/categories";

export function useCategory() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState(null);

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

  return {
    loading,
    categories,
    error,
    getCategories,
  };
}
