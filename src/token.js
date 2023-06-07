import Cookies from "js-cookie";

export default function getToken() {
  const token = Cookies.get("_auth");

  return token;
}
