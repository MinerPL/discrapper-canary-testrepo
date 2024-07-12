n.d(t, {
  R: function() {
return o;
  }
});
var s = n(735250),
  a = n(470079),
  i = n(499150),
  r = n(431516);

function l(e) {
  return e;
}

function o(e) {
  let {
onEnableMFAClick: t,
onMFAEnabled: n
  } = e, {
isUserMFAEnabled: o,
isModerationMFAEnabled: c
  } = (0, r.N)(), d = a.useCallback(async () => {
await t(), null == n || n();
  }, [
t,
n
  ]), u = a.useCallback(e => (0, s.jsx)(i.Z, {
onClick: d,
children: e
  }), [d]);
  return o && c ? l : u;
}