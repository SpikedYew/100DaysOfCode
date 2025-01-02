export interface AppProps {
  title: string;
}
// interface Users {
//   name: {
//     first: string;
//     last: string;
//   };
//   login: {
//     uuid: string;
//   };
//   email: string;
// }

// Exporting each property separetly to reuse them in different component for eg User.tsx
export interface Name {
  first: string;
  last: string;
}
export interface Login {
  uuid: string;
}

export interface Users {
  name: Name;
  login: Login;
  email: string;
}
