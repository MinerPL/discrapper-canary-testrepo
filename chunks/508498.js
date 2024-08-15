n.d(t, {
  Db: function() {
return d;
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var s, r, a = n(470079),
  i = n(266067),
  o = n(37234),
  c = n(703656),
  l = n(981631);

function d() {
  let {
search: e
  } = (0, i.TH)(), t = (0, i.UO)(), n = a.useMemo(() => new URLSearchParams(e), [e]).get('source'), s = null != n ? parseInt(n, 10) : null;
  return {
onClose: a.useCallback(() => {
  if (0 === s) {
    (0, c.op)(), (0, o.jN)(l.S9g.USER_SETTINGS);
    return;
  }
  if ((0, c.uv)()) {
    (0, c.op)();
    return;
  }
  (0, c.uL)(l.Z5c.APP);
}, [s]),
source: s,
...t
  };
}
(r = s || (s = {}))[r.SETTINGS = 0] = 'SETTINGS', r[r.CHANGELOG = 1] = 'CHANGELOG', r[r.DM_LIST = 2] = 'DM_LIST';