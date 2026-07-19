import api from "./axios";

export const getBanks = async () => {
  const response = await api.get("/banks");

  return response.data.data;
};