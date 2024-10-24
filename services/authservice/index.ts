/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
export const login = async (email: string, password: string) => {
  console.log("hellooooooooooooooooooooooo");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    console.log("first");
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return await response.json();
};
