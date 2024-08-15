n.d(t, {
  U: function() {
return s;
  }
});
var a = n(470079),
  r = n(695346),
  i = n(73346),
  o = n(834431);

function s(e, t) {
  let {
shouldAnimate: n = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = r.QK.useSetting(), l = (0, o.n)(), c = n && l && s;
  return a.useMemo(() => {
if ((null == e ? void 0 : e.image_asset) != null)
  return (0, i._W)(e.application_id, e.image_asset, t, c ? void 0 : 'webp');
  }, [
t,
e,
c
  ]);
}