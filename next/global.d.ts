declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare interface IProduct {
  productCode: string;
  productName: string;
  colors: string;
  productPhotos: string;
  productLine: string;
  productVendor: string;
  productDescription: string;
  productContent: string;
  quantityInStock: number;
  buyPrice: number;
  MSRP: number;
  createdAt: string;
  updatedAt: string;
  color: string;
  quantity: string;
}

declare interface IInput {
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  label?: string;
  rules?: any[];
  defaultValue?: string | number;
  prefix?: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  remember?: boolean;
  aria: string;
  className?: string;
  unit?: string;
  group?: string;
  checked?: (e) => boolean | undefined;
  onChange?: (label?, group?, checked?) => void;
  min?: number;
  max?: number;
}

declare interface IUser {
  customerNumber?: string;
  email?: string;
  password?: string;
  userName?: string;
  contactLastName?: string;
  contactFirstName?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  customerPhoto?: string;
  postalCode?: string;
  country?: string;
  salesRepEmployeeNumber?: number;
  creditLimit?: number;
  locked?: boolean;
  registered?: boolean;
  code?: number;
  accessToken?: string;
  msg?: string;
  errors?: string[];
}

declare interface IContact {
  first_name?: string;
  last_name?: string;
  full_name?: string;
  company?: string;
  title?: string;
  address?: string;
  address_line?: string;
  zip?: string;
  city?: string;
  state?: string;
  email?: string;
  web?: string;
  mobile?: string;
  tel?: string;
  bank?: string;
  iban?: string;
  bic?: string;
}

declare interface IMenuItem {
  title: string;
  href: string;
  thumb?: string;
  excerpt?: string;
}

declare interface IMainNav {
  main: {
    title: string;
    links: MenuItem[];
  };
  legals: {
    title: string;
    links: MenuItem[];
  };
}

declare interface IAppStateIface {
  menus: IMainNav;
  contact: IContact;
}

declare interface IRestResponse {
  code?: number;
  msg?: string | any[];
}

declare interface EventTarget extends EventTarget {
  value: string | number;
}
