import useSWR, {responseInterface} from 'swr';
import {getToken} from './token';

async function GET_USER_FROM_MAIL(values: IUser): Promise<IUser> {
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/auth/customers/search/${values.email}`;
  const data = await fetch(url, {
    method: 'GET',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + getToken('accessToken='),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then(res => {
      return res.json();
    })
    .catch(error => {
      return error;
    });

  return data;
}

const GET_USER_FROM_TOKEN = (): responseInterface<IUser, IUser> =>
  useSWR(
    [`${process.env.NEXT_PUBLIC_HOST}/api/auth/customers/login`],
    url =>
      fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        cache: 'reload',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getToken('accessToken='),
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      }).then(r => {
        return r.json();
      }),
    {revalidateOnMount: true},
  );

const VERIFY_TOKEN = (): responseInterface<any, any> =>
  useSWR(
    [`${process.env.NEXT_PUBLIC_HOST}/api/auth/verify`],
    url =>
      fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        cache: 'reload',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getToken('accessToken='),
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      }).then(r => {
        return r.json();
      }),
    {revalidateOnMount: true},
  );

function USE_JWT_VERIFY(): boolean | IUser {
  const {data} = VERIFY_TOKEN();

  if (data && data.error) return false;
  return data;
}

export {USE_JWT_VERIFY, VERIFY_TOKEN, GET_USER_FROM_TOKEN, GET_USER_FROM_MAIL};
