/* eslint-disable padding-line-between-statements */
export const ProjectPost = async (payload: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/project`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "post failed");
  }

  return await response.json();
};

export const GetAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/project`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    const take = await res.json();
    throw new Error(take.message || "Failed to fetch");
  }
  const data = await res.json();
  console.log(data);

  return data;
};

export const DeleteProject = async (id: string) => {
  console.log("id", id);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/project/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Delete failed");
  }

  return await response.json();
};

export const UpdateProject = async (id: string, payload: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/project/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Update failed");
  }

  return await response.json();
};
