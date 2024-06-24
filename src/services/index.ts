import { Accessory, CreateLeadBody, Motorcycle } from "./interfaces";

const BASE_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
};

const cacheRevalidation = { revalidate: 108000 };

const config = {
  headers,
  cacheRevalidation,
};

async function fetchAllMotorcycles(): Promise<Motorcycle[]> {
  const res = await fetch(`${BASE_URL}/products/motorcycles`, config);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function fetchMotorcycleById(uuid: string): Promise<Motorcycle[]> {
  const res = await fetch(`${BASE_URL}/products/motorcycles?uuid=${uuid}`, config);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function fetchAllAccessories(): Promise<Accessory[]> {
  const res = await fetch(`${BASE_URL}/products/accessories`, config);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function fetchAccesoryById(uuid: string): Promise<Accessory[]> {
  const res = await fetch(`${BASE_URL}/products/accessories?uuid=${uuid}`, config);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function createdLead(body: CreateLeadBody) {
  const res = await fetch(`${BASE_URL}/leads`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export {
  fetchAllMotorcycles,
  fetchMotorcycleById,
  fetchAllAccessories,
  createdLead,
  fetchAccesoryById,
};
