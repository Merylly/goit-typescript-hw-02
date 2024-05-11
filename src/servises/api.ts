import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IImage } from "../components/App/App.types";

const API_KEY = "Client-ID Ko39u3MPp0zC4ZmKHSkFb2wnl3u79zNAAkemCu6qw5A";

interface Params {
  page: number;
  per_page: number;
  query: string;
}

interface ApiResponse {
  total_pages: number;
  results: IImage[];
}

const params: Params = {
  page: 1,
  per_page: 15,
  query: "",
};

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: { Authorization: API_KEY },
});

export const fetchGalleryImages = async (
  query: string,
  page: number
): Promise<{ total_pages: number; images: IImage[] }> => {
  try {
    const response: AxiosResponse<ApiResponse> = await instance.get("", {
      params: {
        ...params,
        query,
        page,
      },
    });
    const { total_pages, results } = response.data;

    return { total_pages, images: results };
  } catch (error) {
    throw new Error("Failed to fetch gallery images");
  }
};
