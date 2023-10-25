const baseUrl = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};
const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  }).then(checkServerResponse);
};

const addNewClothes = async (item) => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: item.name,
      link: item.link,
      weather: item.weather,
    }),
  });
  return checkServerResponse(res);
};

const deleteClothingItem = async (itemId) => {
  const res = await fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: headers,
  });
  return checkServerResponse(res);
};

export {
  checkServerResponse,
  getClothingItems,
  addNewClothes,
  deleteClothingItem,
};
