export type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  }
  address: {
    city: string;
    street: string;
    zipcode: string;
    suite: string;
    geo: {
      lat: number;
      lng: number;
    }
  }
}
