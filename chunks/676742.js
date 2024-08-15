n.d(t, {
  Z: function() {
return s;
  }
}), n(47120);
var r = n(470079),
  i = n(846519),
  a = n(864106);

function s(e) {
  let [t, n] = r.useState(!1), s = r.useRef(null);
  return r.useEffect(() => {
let t = () => {
  if (null == e || !('expiresAt' in e) || null == e.expiresAt) {
    n(!1);
    return;
  }
  let r = (0, a.fO)(e);
  n(r);
  let o = 1000 * e.expiresAt - Date.now();
  if (!r && o > 0) {
    let e = new i.V7();
    e.start(Math.min(2147483647, o), () => t()), s.current = e;
  }
};
return t(), () => {
  var e;
  return null === (e = s.current) || void 0 === e ? void 0 : e.stop();
};
  }, [e]), r.useEffect(() => {
if (t) {
  var e;
  null === (e = s.current) || void 0 === e || e.stop();
}
  }, [t]), t ? void 0 : e;
}