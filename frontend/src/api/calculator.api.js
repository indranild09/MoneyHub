import api from "./axios";

export async function calculateReturns(data) {
  const response = await api.post(
    "/calculator",
    data
  );

  return response.data.data;
}

export async function compareReturns(data) {
  const response = await api.post(
    "/calculator/compare",
    data
  );

  return response.data.data;
}