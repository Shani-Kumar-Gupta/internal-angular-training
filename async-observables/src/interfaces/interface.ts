export interface Currency {
  code: string;
}

export interface Stock {
  id: number;
  stock: string;
  currency: string;
  amount: number;
}