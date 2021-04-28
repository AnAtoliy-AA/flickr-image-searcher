import { API_KEY } from '../api-keys/api-keys';
import axios from "axios";

const FLICKR_API = "https://www.flickr.com/services/rest/?";
const FliCKR_API_METHOD = "method=flickr.photos.search";
const FLICKR_FORMAT = "format=json&nojsoncallback=1";


export const imageAppApi = {
  getImagesByName(imagesName: string, pageNumber: number) {
    return axios.get(`${FLICKR_API}${FliCKR_API_METHOD}&api_key=${API_KEY}&text=${imagesName}&page=${pageNumber}&${FLICKR_FORMAT}`)
    .then((response) => {
      return response.data;
    });
  },
};
