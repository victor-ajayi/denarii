export async function loginUser(formData) {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: formData.email,
        password: formData.password,
      }),
    });
    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else if (res.status === 403) {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    console.error(err);
  }
}

export async function registerUser(data) {
  try {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    if (res.status === 201) {
      const data = await res.json();
      return data;
    } else if (res.status === 400) {
      throw new Error("User already exists");
    } else {
      throw new Error("There was a problem");
    }
  } catch (err) {
    console.error(err);
  }
}
