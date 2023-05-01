import {getToken} from './token';

async function loginUserPlain(values: IUser): Promise<IUser> {
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/customers/login`;
  // eslint-disable-next-line prefer-const
  let body = new URLSearchParams();

  for (const key in values) {
    if (Object.prototype.hasOwnProperty.call(values, key)) {
      body.set(key, values[key]);
    }
  }

  const data = await fetch(url, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: new URLSearchParams(body),
  })
    .then(res => res.json() as Promise<IUser>)
    .catch(error => {
      return error as Promise<IUser>;
    });

  return data;
}

async function updateUser(values: IUser): Promise<IUser> {
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/auth/customers/${values.email}`;
  // eslint-disable-next-line prefer-const
  let body = new URLSearchParams();

  for (const key in values) {
    if (Object.prototype.hasOwnProperty.call(values, key)) {
      body.set(key, values[key]);
    }
  }

  const data = await fetch(url, {
    method: 'PATCH',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + getToken('accessToken='),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: new URLSearchParams(body),
  })
    .then(res => {
      return res.json();
    })
    .catch(error => {
      return error;
    });
  return data;
}

async function createUser(newUser: IUser): Promise<IUser> {
  const url = `${process.env.NEXT_PUBLIC_HOST}/api/customers/${newUser.email}`;
  // eslint-disable-next-line prefer-const
  let body = new URLSearchParams();

  for (const key in newUser) {
    if (Object.prototype.hasOwnProperty.call(newUser, key)) {
      body.set(key, newUser[key]);
    }
  }
  const data = await fetch(url, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'reload',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: new URLSearchParams(body),
  })
    .then(res => {
      return res.json();
    })
    .catch(error => {
      return error;
    });

  return data;
}

export {loginUserPlain, updateUser, createUser};
