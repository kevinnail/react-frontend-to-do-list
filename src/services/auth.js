import { signInUser, signOutUser, signUpUser } from './fetch-utils.js';

// import { client } from './client';

// export function getUser() {
//   return client.auth.currentUser;
// }

export async function authUser(email, password, type) {
  let response;
  if (type === 'sign-up') {
    // response = await client.auth.signUp({ email, password });
    response = await signUpUser({ email, password });
  } else {
    response = await signInUser({ email, password });
  }
  if (response.error) {
    throw response.error;
  }
  return response.user;
}

export async function signOut() {
  // await client.auth.signOut();
  await signOutUser();
}
