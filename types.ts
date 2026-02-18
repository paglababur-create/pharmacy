export interface OrderItem {
  id: string;
  category: string;
  medicineName: string;
  companyName: string;
  quantity: number;
  unit: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  totalItems: number;
}

export interface PharmacyDetails {
  name: string;
  proprietor: string;
  designation: string;
  address: string;
  phone: string;
}

export type Category = 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Drop' | 'Cream' | 'Others';
export type Unit = 'Box' | 'Pcs' | 'Strip' | 'Bottle' | 'Vial';