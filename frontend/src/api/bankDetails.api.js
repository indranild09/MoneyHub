import api from "./axios";

export async function getBankDetails(shortName) {
  const response = await api.get(`/banks/${shortName}`);

  return response.data.data;
}