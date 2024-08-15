n.d(t, {
  x: function() {
return s;
  }
}), n(47120);
var i = n(470079);

function s(e, t, n) {
  let s = i.useRef(null),
[o, a] = i.useState(!1),
l = i.useCallback(() => {
  if (e && null !== s.current) {
    var n;
    a((null === (n = s.current) || void 0 === n ? void 0 : n.offsetHeight) > 2.5 * t);
  }
}, [
  a,
  e,
  t
]);
  return i.useLayoutEffect(() => {
l();
  }, [
l,
e,
n
  ]), {
postTitleRef: s,
isNewBadgeOverflow: o
  };
}