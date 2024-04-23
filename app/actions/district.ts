"use server";

export const newDistrict = async (formData: {}): Promise<any> => {
  try {
    const response = await fetch(`${process.env.ROOT_LINK}/api/districts/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(formData),
    });
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getDistricts = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/districts/all/`,
      {
        next: { revalidate: 0 },
      }
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getSingledistrict = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/districts/single/?id=${id}`,
      {
        next: { revalidate: 0 },
      }
    );
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const deleteDistrict = async (id: string): Promise<any> => {
  const response = await fetch(
    `${process.env.ROOT_LINK}/api/districts/delete/?district=${id}`,
    {
      method: "DELETE",
      next: { revalidate: 0 },
    }
  );
  const res = await response.json();
  console.log("Response => ", res);
  return res;
};
