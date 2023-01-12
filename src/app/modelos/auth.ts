
export interface Auth {
  username:string,
  password:string
};
export type authresponse = {
  id: number,
  username:string ,
  email:string,
  firstName: string,
  lastName:string,
  gender: string,
  image:string,
  token:string
};
