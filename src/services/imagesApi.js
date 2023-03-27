import axios from 'axios';

export const getAllProjectsImagesAPI = async (searchTerm) => {

  const apiKey = '98e3fb1f';

  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
