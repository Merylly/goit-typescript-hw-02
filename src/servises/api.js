import axios from "axios";

const API_KEY = "Client-ID Ko39u3MPp0zC4ZmKHSkFb2wnl3u79zNAAkemCu6qw5A";
const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: { Authorization: API_KEY },
});

export const fetchGalleryImages = async (query, page) => {
  const response = await instance.get("", {
    params: { query: query, page: page, per_page: 15 },
  });

  return response.data;
};

