import { formatNumber } from "@/common/lib";

import { Motorcycle, Product } from "../interfaces";

const parseData = (data: Product[]) =>
  data.map((d) => ({
    id: d.uuid,
    name: d.name,
    seller: d.seller.name,
    price: formatNumber(d?.variants[0]?.prices[0]?.amount),
    currency: d.variants[0].prices[0].currency,
    image: d.variants[0].images[0].url,
    color: {
      name: d.variants[0].name,
      hex: "#B21A1A",
    },
    details: {
      motor: d.variants[0].details.motors[0].value,
      category: "Street",
      height: "60",
    },
    variantId: d.variants[0].uuid,

    isFeatured: Math.random() < 0.5,
    hasDiscount: Math.random() < 0.5,
    isOnOffer: Math.random() < 0.5,
  }));

const parseMotorcycle = (motorycicle: Motorcycle[]) => ({
  ...parseData(motorycicle)[0],
  images: motorycicle[0].variants[0].images.map((image) => image.url),
  features: motorycicle[0].variants[0].details.features,
  details: {
    motor: motorycicle[0].variants[0].details.features.find((f) =>
      f.value.includes("Motor"),
    )!!.value,
    power: motorycicle[0].variants[0].details.features.find((f) =>
      f.value.includes("Potencia"),
    )!!.value,
    id: motorycicle[0].variants[0].uuid,
  },
  installmentPrice: formatNumber(
    Math.round((motorycicle[0].variants[0].prices[0].amount / 12) * 1.8),
  ),
});

const parseAccesory = (accesory: Product[]) => ({
  ...parseData(accesory)[0],
  images: accesory[0].variants[0].images.map((image) => image.url),
});

export { parseData, parseMotorcycle, parseAccesory };
