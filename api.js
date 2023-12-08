const myHeaders = {
  "Content-type": "application/json",
};
const baseUrl = "http://localhost:3001";
export async function login(email, pass) {
  const body = {
    email: email,
    password: pass,
  };
  const myBody = JSON.stringify(body);
  const res = await fetch(`${baseUrl}/login`, {
    headers: myHeaders,
    body: myBody,
    method: "POST",
  });
  if (res.status == 200) {
    const resJson = await res.json();
    return resJson;
  } else {
    return null;
  }
}
export async function register(email, pass) {
  const body = {
    email: email,
    password: pass,
  };
  const myBody = JSON.stringify(body);
  const res = await fetch(`${baseUrl}/users`, {
    headers: myHeaders,
    body: myBody,
    method: "POST",
  });
  if (res.status == 201) {
    const resJson = await res.json();
    return resJson;
  } else {
    return null;
  }
}
