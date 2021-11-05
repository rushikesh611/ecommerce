import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmRhZjVjNmJlMjJhODNkNjdjNGFkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjEwMzQ2NywiZXhwIjoxNjM2MzYyNjY3fQ.TVgzKcesUkJBN7fofZP--Kz1JKuqLx4h11Xh8ifWUiU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
