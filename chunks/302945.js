"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(793030),
  l = n(422034),
  u = n(182294),
  _ = n(689938),
  d = n(600541);

function c(e) {
  let {
    affinities: t,
    className: n
  } = e, s = e => null != e.globalName ? e.globalName : e.username, c = r.useMemo(() => t.length > 1 ? _.Z.Messages.NITRO_AFFINITY_UPSELL.format({
    username: s(t[0]),
    numFriends: t.length - 1
  }) : "", [t]);
  if (t.length <= 1) return null;
  let E = t.map((e, n) => (0, i.jsx)(l.O, {
    affinity: e,
    applyMask: n !== t.length - 1,
    size: u.EF.SIZE_20
  }, e.id));
  return (0, i.jsxs)("div", {
    className: o()(d.container, n),
    children: [(0, i.jsx)("div", {
      className: d.iconContainer,
      children: E
    }), (0, i.jsx)("div", {
      className: d.textContainer,
      children: (0, i.jsx)(a.x, {
        variant: "text-sm/medium",
        children: c
      })
    })]
  })
}