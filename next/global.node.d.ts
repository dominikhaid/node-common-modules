declare namespace Express {
  export interface Request {
    xssFilter?: T;
    body: B;
    query: Q;
    params: P;
    headers: H;
  }
}

declare interface IServerOpt {
  server: string;
  cors: boolean;
  helment: boolean;
  jwt: boolean;
  http: boolean;
  https: boolean;
  webpack: boolean;
}
