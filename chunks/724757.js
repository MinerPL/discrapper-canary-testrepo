n.d(t, {
  Z: function() {
return r;
  }
});
var l = n(470079),
  a = n(924826),
  i = n(442837),
  s = n(607070);

function r(e, t, n) {
  let r = (0, i.e7)([s.Z], () => s.Z.keyboardModeEnabled),
c = l.useCallback(e => {
  let n = document.querySelector(e),
    l = t.current;
  null != n && null != l && (n.focus(), l.scrollIntoViewNode({
    node: n,
    padding: 80
  }));
}, [t]),
o = l.useCallback(() => new Promise(e => {
  let n = t.current;
  if (null == n)
    return e();
  n.scrollTo({
    to: 0,
    callback: () => requestAnimationFrame(() => e())
  });
}), [t]),
u = l.useCallback(() => new Promise(e => {
  let n = t.current;
  if (null == n)
    return e();
  n.scrollTo({
    to: Number.MAX_SAFE_INTEGER,
    callback: () => requestAnimationFrame(() => e())
  });
}), [t]);
  return (0, a.ZP)({
id: e,
isEnabled: r,
setFocus: c,
scrollToStart: o,
scrollToEnd: u,
orientation: null == n ? void 0 : n.orientation
  });
}