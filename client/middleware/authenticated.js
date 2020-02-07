export default function({ store, redirect }) {
  // 사용자가 인증을 하지 않은 경우.
  console.log(store.state.user, '미들웨어');
  if (!store.state.user) {
    return redirect('/');
  }
}
