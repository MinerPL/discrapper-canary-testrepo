s(47120);
var n = s(470079),
  a = s(597688),
  i = s(884697),
  r = s(223143);
t.Z = e => {
  let [t, s] = n.useState(), {
categories: o,
purchases: l
  } = (0, r.Z)();
  return n.useEffect(() => {
(null == t || 0 === t.size) && s(o);
  }, [
o,
t
  ]), n.useMemo(() => {
if (null != e)
  return e;
if (null == t)
  return;
let s = (0, i.iC)(l, t).filter(e => {
  let {
    skuId: t
  } = e, s = a.Z.getProduct(t);
  return (0, i.G1)(s);
});
return s[Math.floor(Math.random() * s.length)];
  }, [
t,
e,
l
  ]);
};