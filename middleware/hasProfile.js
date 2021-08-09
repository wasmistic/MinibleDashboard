export default function ({
  redirect,
  store
}) {
  const user = store.state.auth.user;
  const isLoggedIn = store.state.auth.loggedIn;
  if (!user.has_profile) {
    redirect({
      name: 'profiling'
    })
  }
}
