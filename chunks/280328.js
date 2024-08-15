n.d(t, {
  A: function() {
return o;
  }
});
var r = n(470079),
  i = n(261376),
  a = n(68985),
  s = n(921944);

function o(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
o = !n && null != e && !i.O.has(e);
  r.useEffect(() => () => {
o && a.Z.lastDCDismissed !== e && t(s.L.AUTO_DISMISS, !0);
  }, [
o,
t,
e
  ]);
}