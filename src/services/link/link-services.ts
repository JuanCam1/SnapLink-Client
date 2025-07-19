import { axiosInstance } from "@/lib/axios";


export const createLinkService = async (link: LinkModelI) => {
  return await axiosInstance.post("/link", link);
};

export const getLinkService = async (id: string) => {
  const response = await fetch(`/api/link/${id}`);

  return response.json();
};

export const updateLinkService = async (link: LinkUpdateModelI) => {
  const response = await fetch(`/api/link/${link.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(link),
  });

  return response.json();
};

export const deleteLinkService = async (id: string) => {
  const response = await fetch(`/api/link/${id}`, {
    method: "DELETE",
  });

  return response.json();
};