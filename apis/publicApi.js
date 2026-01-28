const URL = "https://baniyanirmansewa.scoduscorp.com";

export const getSiteSettings = async () => {
  const response = (await fetch(URL + "/api/site-settings")).json();
  const data = await response.then((data) => {
    return data;
  });
  return data;
};

export const getBanners = async () => {
  const response = (await fetch(URL + "/api/banners")).json();
  const data = await response.then((data) => {
    return data;
  });

  return data;
};
