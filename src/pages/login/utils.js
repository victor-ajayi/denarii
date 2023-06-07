export async function loginToAPI(formData) {
  try {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: formData.email,
        password: formData.password,
      }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
  }
}
