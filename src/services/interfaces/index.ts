export interface Product {
  uuid: string;
  name: string;
  seller: {
    name: string;
  };
  variants: [
    {
      uuid: string;
      prices: [
        {
          amount: number;
          currency: string;
        },
      ];
      details: {
        motors: [
          {
            value: string;
          },
        ];
        features: [
          {
            value: string;
          },
        ];
      };
      images: [
        {
          url: string;
        },
      ];
      name: string;
    },
  ];
}

export interface Motorcycle extends Product {}

export interface Accessory extends Product {}

export interface CreateLeadBody {
  uuid: string;
  accesories: string[];
  contact: {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    finance: boolean;
    trade: boolean;
  };
}
