import axios from "axios";

const spanishWordsApi = axios.create({
  baseURL: "https://palabra-be-dp9n.onrender.com/api",
});

export const getSpanishWords = () => {
  return spanishWordsApi.get("/palabras").then((res) => {
    return res.data;
  });
};

const frenchhWordsApi = axios.create({
  baseURL: "https://palabra-be-dp9n.onrender.com/api",
});

export const getFrenchWords = () => {
  return frenchhWordsApi.get("/mots").then((res) => {
    return res.data;
  });
};

const italianWordsApi = axios.create({
  baseURL: "https://palabra-be-dp9n.onrender.com/api",
});

export const getItalianWords = () => {
  return italianWordsApi.get("/parole").then((res) => {
    return res.data;
  });
};

const germanWordsApi = axios.create({
  baseURL: "https://palabra-be-dp9n.onrender.com/api",
});

export const getGermanWords = () => {
  return germanWordsApi.get("/wort").then((res) => {
    return res.data;
  });
};