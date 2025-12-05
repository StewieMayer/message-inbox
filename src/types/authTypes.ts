export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  t: string;
  rt: string;
}

export interface LogoutResponse {
  message: string;
}

export interface IsLoggedInResponse {
  loggedIn: boolean;
}

export interface RefreshTokenResponse {
  t: string;
  rt: string;
}
