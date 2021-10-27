import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmRhZjVjNmJlMjJhODNkNjdjNGFkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTMyMDI2NCwiZXhwIjoxNjM1NTc5NDY0fQ.YFdWRs0bFMYXhn7dxWQrSSW-pwi_d6CpxS2v3T-965g";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
