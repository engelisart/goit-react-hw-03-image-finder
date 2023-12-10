import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImg = async configParams => {
  const { data } = await axios.get('', {
    params: {
      q: 'christmas fireplace',
      per_page: 12,
      page: 1,
      key: '40691012-8f236ebf8c6cb98d313bec4db',
      ...configParams,
    },
  });

  return data;
};
