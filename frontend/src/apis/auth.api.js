export const reqLogin = async (name, pass) => {
  const req = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: name, password: pass }),
    credentials: "include",
  });
  const res = await req.json();
  return { res };
};

export const reqSession = async () => {
  const req = await fetch("http://localhost:4000/session", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const session = await req.json();

  return { session, req };
};

export const logoutSession = async () => {
  const req = await fetch("http://localhost:4000/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const res = await req.json();
  console.log(res);
};
