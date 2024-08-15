n.d(t, {
  P: function() {
return l;
  }
}), n(47120);
var s = n(470079),
  r = n(979554),
  a = n(442837),
  i = n(597688),
  o = n(365943),
  c = n(25251);
let l = () => {
  let e = (0, a.e7)([i.Z], () => i.Z.products);
  s.useEffect(() => {
let t = [...e.values()].filter(e => e.type === r.Z.PROFILE_EFFECT).some(e => {
  let t = e.items[0].id;
  return null != t && null == c.Z.getProfileEffectById(t);
});
(0, o.z)(t);
  }, [e]);
};