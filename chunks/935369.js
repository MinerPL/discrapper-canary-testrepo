t.d(n, {
  Z: function() {
return l;
  }
}), t(47120);
var r = t(470079),
  i = t(479531),
  o = t(689938);

function l(e) {
  let [n, t] = r.useState(!1), [l, u] = r.useState(null);
  return [
r.useCallback(async function() {
  for (var n = arguments.length, r = Array(n), l = 0; l < n; l++)
    r[l] = arguments[l];
  try {
    return u(null), t(!0), await e(...r);
  } catch (e) {
    e.message !== o.Z.Messages.MFA_V2_CANCELED && u(e instanceof i.Z ? e : new i.Z(e));
  } finally {
    t(!1);
  }
}, [e]),
{
  loading: n,
  error: l
}
  ];
}