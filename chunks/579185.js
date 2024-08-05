n.d(t, {
  Z: function() {
return s;
  }
}), n(47120);
var i = n(470079),
  a = n(846519);

function s(e, t) {
  let [n, s] = i.useState(!1), l = i.useRef(new a.sW(t, () => s(!1))), r = i.useRef(new a.sW(e, () => s(!0))), o = i.useCallback(() => {
l.current.cancel(), r.current.cancel();
  }, []);
  i.useEffect(() => o, [o]);
  let c = i.useCallback(() => {
o(), l.current.delay();
  }, [o]);
  return {
isHovered: n,
setIsHovered: s,
onMouseEnter: i.useCallback(() => {
  o(), r.current.delay();
}, [o]),
onMouseLeave: c,
cancelTimers: o
  };
}