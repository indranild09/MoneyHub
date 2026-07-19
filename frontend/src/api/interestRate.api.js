import api from "./axios";

export const getInterestRates = async (params) => {
  const response = await api.get("/interest-rates", {
    params,
  });

  return response.data.data;
};