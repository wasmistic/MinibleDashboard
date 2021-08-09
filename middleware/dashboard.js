export default function ({
  redirect,
  store
}) {
  const user = store.state.auth.user;
  const isLoggedIn = store.state.auth.loggedIn;
  if (!user.is_verified ) {
    console.log('to dashboard');
      redirect({
      name: 'verify'
      })
  }else if(user.is_verified && !user.has_profile){
       redirect({
         name: 'profiling'
       })
  
  }
}
