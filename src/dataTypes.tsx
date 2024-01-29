/* eslint-disable @typescript-eslint/no-explicit-any */

export interface OnChangeTypes {
    target: any;
    preventDefault(): unknown;
    onChange: (event: any) => void;
  }

  export interface FormData{
    name:string,
    email:string,
    number:number,
    password:string,
    confirmPassword:string,
    check?: boolean
  }
  
