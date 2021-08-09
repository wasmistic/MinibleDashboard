export default function ({
  redirect,
  store
}) {
  const user = store.state.auth.user;
  const isLoggedIn = store.state.auth.loggedIn;
  if (!user.have_request) {
    redirect({
      name: 'request'
    })
  }
}
