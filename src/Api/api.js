import axios from "axios";
export const fetchShoes = async () => {
  return await shoesApi.get();
};
export const shoesApi = axios.create({
  baseURL: "https://61c2fbb19cfb8f0017a3e836.mockapi.io/categories/2/shoes",
});
