n.d(t, {
  Z: function() {
return a;
  }
}), n(47120);
var r = n(470079),
  i = n(40851);

function a(e) {
  let {
renderWindow: t
  } = (0, r.useContext)(i.ZP), [n, a] = (0, r.useState)(() => t.matchMedia(e).matches);
  return (0, r.useEffect)(() => {
let n = t.matchMedia(e),
  r = e => {
    a(null == e ? void 0 : e.matches);
  };
return r(n), n.addListener(r), () => n.removeListener(r);
  }, [
e,
t
  ]), n;
}