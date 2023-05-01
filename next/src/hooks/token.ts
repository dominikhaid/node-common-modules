function removeToken(params: string): boolean {
  if (!document || !params) return false;

  if (document.cookie.split(';').find(item => item.trim().startsWith(params)))
    document.cookie = `${params}=;path=/;samesite=strict;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  return true;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type ILogout = ({user: IUser}) => void;

function logout(callBack: ILogout): void {
  if (!process.browser) return;
  removeToken('accessToken');
  setTimeout(() => {
    callBack({user: {}});
  }, 100);
}

function setToken(params: string): boolean {
  if (!document || !params) return false;
  if (process.env.NEXT_PUBLIC_HOST !== 'http://localhost')
    document.cookie = `accessToken=${params};path=/;secure=true;samesite=strict;max-age=86400`;
  if (process.env.NEXT_PUBLIC_HOST === 'http://localhost')
    document.cookie = `accessToken=${params};path=/;samesite=strict;max-age=86400`;
  return true;
}

function getToken(params: string): string | undefined {
  if (!document || !params) return undefined;

  if (document.cookie.split(';').find(item => item.trim().startsWith(params)))
    return document?.cookie
      ?.split(';')
      ?.find(item => item.trim().startsWith(params))
      ?.replace(params, '');
}

export {logout, removeToken, getToken, setToken};
