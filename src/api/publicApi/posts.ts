import apiClient from "../apiClient";

export const fetchPosts = async () => {
  try {
    // JSONPlaceholder (API pública de ejemplo)
    const response = await apiClient.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
