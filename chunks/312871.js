t.d(n, {
  Z: function() {
return a;
  }
});
var i = t(470079),
  l = t(434650);

function a(e) {
  let {
onVisible: n,
threshold: t
  } = e, a = i.useRef(!1);
  return (0, l.O)(e => {
if (!!e && !0 !== a.current)
  n(), a.current = !0;
  }, t);
}