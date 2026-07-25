import api from "./axios";

export async function compareReturns(data) {
  const response = await api.post(
    "/calculator/compare",
    data
  );

  return response.data.data;
}