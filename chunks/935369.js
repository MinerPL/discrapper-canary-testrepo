t.d(n, {
  Z: function() {
return l;
  }
}), t(47120);
var i = t(470079),
  r = t(479531),
  o = t(689938);

function l(e) {
  let [n, t] = i.useState(!1), [l, u] = i.useState(null);
  return [
i.useCallback(async function() {
  for (var n = arguments.length, i = Array(n), l = 0; l < n; l++)
    i[l] = arguments[l];
  try {
    return u(null), t(!0), await e(...i);
  } catch (e) {
    e.message !== o.Z.Messages.MFA_V2_CANCELED && u(e instanceof r.Z ? e : new r.Z(e));
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