const baseUrl =
  process.env.NODE_ENV === "production" ? "http://localhost:3001" : "";

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
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
};
const addNewClothes = async (item, token) => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    }),
  });
  return checkServerResponse(res);
};

const deleteClothingItem = async (itemId, token) => {
  const res = await fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return checkServerResponse(res);
};

const addLikeItem = async (itemId, token) => {
  const res = await fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return checkServerResponse(res);
};

const removeLikedItem = async (itemId, token) => {
  const res = await fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return checkServerResponse(res);
};
const updateUserProfile = async (name, avatar, token) => {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
  return checkServerResponse(res);
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
