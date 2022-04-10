import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
const API = process.env.rapidApiKey;
console.log(API);
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "d57b1a3e6dmshf74cb51c7d772a7p1f47c5jsn9e04c7903b05",
    },
  });
  return data;
};
