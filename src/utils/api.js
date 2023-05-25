import axios from "axios";

const spanishWordsApi = axios.create({
  baseURL: "https://palabra-be-dp9n.onrender.com/api",
});

export const getSpanishWords = () => {
  return spanishWordsApi.get("/palabras").then((res) => {
    return res.data;
  });
};
