import { URL_API_AUTH } from "./url";

export const authUser = async (body) => {
  const response = await fetch(`${URL_API_AUTH}/auth/login`, {
    method: "POST",
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify(body)
  });
  const data = await response.json()
  return data
};