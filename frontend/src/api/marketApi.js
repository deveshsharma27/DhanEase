import axios from "axios";

export const getMarketSummary = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/market/summary`
  );
  return response.data;
};
