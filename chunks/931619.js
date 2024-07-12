let r;
n(653041);
r = n(538036).Z;
let i = [],
  a = !1;
t.Z = {
  ...r,
  awaitOnline: () => new Promise(e => {
if (r.isOnline())
  return e();
{
  if (i.push(e), a)
    return;
  a = !0;
  let t = () => {
    i.forEach(e => e()), i.length = 0, a = !1, r.removeOnlineCallback(t);
  };
  r.addOnlineCallback(t);
}
  })
};