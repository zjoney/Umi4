declare namespace API {
  export interface ListData<T> {
    data?: Data<T>;
    errorCode?: string;
    errorMessage?: string;
    errorType?: number;
    success?: boolean;
  }

  export interface Data<T> {
    list?: T[];
    total?: number;
  }
  export interface User {
    id?: number;
    password?: string;
    phone?: string;
    username?: string;
  }
}