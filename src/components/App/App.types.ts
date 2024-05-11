export interface IImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    thumb: string;
    small_s3: string;
    raw: string;
    full: string;
  };
  alt_description: string;
}

export interface IImageModal {
  urls: {
    regular: string;
  };
  alt_description: string;
}
