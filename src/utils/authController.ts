/**
 * Checks for the presence of a JWT in the document's cookies.
 * 
 * @param cookieName The name of the cookie to look for. Defaults to 'jwt_token'.
 * @returns The token string if found, otherwise null.
 */
export const getTokenFromCookie = (cookieName: string = 'jwt_token'): string | null => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    // Does this cookie string begin with the name we want?
    if (cookie.startsWith(cookieName + '=')) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null;
};

/**
 * Checks if the user is considered logged in based on the presence of the token cookie.
 * 
 * @returns True if the token exists, otherwise false.
 */
export const isLoggedIn = (): boolean => {
  return getTokenFromCookie() !== null;
};
