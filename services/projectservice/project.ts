/* eslint-disable no-console */
/* eslint-disable padding-line-between-statements */
export const ProjectPost = async (payload: any) => {
  const response = await fetch("/api/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "post failed");
  }

  return await response.json();
};
