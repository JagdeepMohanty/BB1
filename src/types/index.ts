export type Theme = 'light' | 'dark';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'idli' | 'dosa' | 'paddu' | 'roti' | 'chutney' | 'combo';
}

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}