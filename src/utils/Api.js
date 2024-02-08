const baseUrl =
  process.env.NODE_ENV === "production"
    ? "api.explorerwtwr.crabdance.com"
    : "http://localhost:3001";

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const request = (url, options) => {
  return fetch(url, options).then(checkServerResponse);
};

const getClothingItems = async () => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const addNewClothes = ({ name, imageUrl, weather }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
};

const deleteClothingItem = (itemId) => {
  return request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

const addLikeItem = (itemId) => {
  return request(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

const removeLikedItem = (itemId) => {
  return request(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};
const updateUserProfile = ({ name, avatar }) => {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
};
export {
  checkServerResponse,
  baseUrl,
  getClothingItems,
  addNewClothes,
  deleteClothingItem,
  addLikeItem,
  removeLikedItem,
  updateUserProfile,
};
