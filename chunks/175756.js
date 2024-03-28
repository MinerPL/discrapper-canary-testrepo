"use strict";
s.r(t), s("47120");
var a = s("470079"),
  n = s("597688"),
  l = s("884697"),
  i = s("223143");
t.default = e => {
  let [t, s] = a.useState(), {
    categories: r
  } = (0, i.default)();
  return a.useEffect(() => {
    (null == t || 0 === t.size) && s(r)
  }, [r, t]), a.useMemo(() => {
    if (null != e) return e;
    if (null == t) return;
    let s = (0, l.getProfileEffectsFromCategories)(t).filter(e => {
      let {
        skuId: t
      } = e, s = n.default.getProduct(t);
      return (0, l.isPremiumCollectiblesProduct)(s)
    }).map(e => e.id);
    return s[Math.floor(Math.random() * s.length)]
  }, [t, e])
}