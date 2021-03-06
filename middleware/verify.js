export default function ({
  redirect,
  store
}) {
  const user = store.state.auth.user;
  const isLoggedIn = store.state.auth.loggedIn;
  if (!user.is_verified) {
    console.log('not verified');
    redirect({
      name: 'verify'
    })
  }
}
