import api from "./axios";

export const calculateReturns = async (payload) => {
  const response = await api.post("/calculator", payload);

  return response.data.data;
};