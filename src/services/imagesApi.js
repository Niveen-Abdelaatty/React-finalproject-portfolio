import axios from 'axios';

export const getWeatherData = async (searchTerm) => {

  const apiKey = 'f4ab1ec78ad15221e577815fd50f5160';

  const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
