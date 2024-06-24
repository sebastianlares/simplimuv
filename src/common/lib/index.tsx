export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const emailValidator =
  /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function isValidEmail(email: string): boolean {
  if (email.length > 255) {
    return false; // Email is too long
  }

  const [localPart, domain] = email.split("@");

  if (localPart.length > 64) {
    return false; // Local part is too long
  }

  if (email.split("@").length !== 2) {
    return false; // More than one @ character
  }

  if (localPart.includes(" ")) {
    return false; // Local part contains spaces
  }

  if (!domain.includes(".")) {
    return false;
  }

  if (domain.startsWith(".") || domain.endsWith(".")) {
    return false; // Domain starts or ends with "."
  }

  if (!emailValidator.test(email)) {
    return false; // Domain part doesn't follow LDH rule
  }

  return true;
}

export const getAccesories = (accesories: any, searchParams: any) => {
  const params = new URLSearchParams(searchParams);
  const newAccesories: Record<any, any>[] = [];

  for (const acc of accesories) {
    const amount = params.get(acc.id);

    if (amount) {
      const accesory: Record<string, any> = {};

      accesory.price = (Number(acc.price) * Number(amount)).toFixed(3).toString();
      accesory.name = acc.name;
      accesory.amount = amount;
      accesory.currency = acc.currency;
      newAccesories.push(accesory);
    }
  }

  return newAccesories;
};
