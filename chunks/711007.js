t.d(e, {
  p: function() {
return a;
  }
});
var l = t(470079),
  u = t(409813),
  i = t(882712);

function a(n, e, t) {
  l.useEffect(() => {
null != n && n !== u.h8.AWAITING_PURCHASE_TOKEN_AUTH && e === i.I.PENDING ? t(u.h8.AWAITING_PURCHASE_TOKEN_AUTH) : n === u.h8.AWAITING_PURCHASE_TOKEN_AUTH && e === i.I.SUCCESS && t(u.h8.REVIEW);
  }, [
n,
e,
t
  ]);
}