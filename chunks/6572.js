"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("442837"),
  r = n("963838"),
  o = n("37091"),
  u = n("689938"),
  d = n("620582");

function c(e) {
  let t, {
      channelId: n,
      userId: l
    } = e,
    [c, f] = (0, i.useStateFromStoresArray)([o.default], () => [o.default.getWaitingHighFive(n, l), o.default.getCompletedHighFive(n, l)]);
  if (null != f) t = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("img", {
      alt: u.default.Messages.CALL_HIGH_FIVE_EXCLAMATION,
      src: (0, r.getEffectUrl)({
        name: f[0],
        id: null,
        animated: !1
      }),
      className: s()(d.completeLeft, d.highFive)
    }), (0, a.jsx)("img", {
      alt: u.default.Messages.CALL_HIGH_FIVE_EXCLAMATION,
      src: (0, r.getEffectUrl)({
        name: f[1],
        id: null,
        animated: !1
      }),
      className: s()(d.completeRight, d.highFive)
    })]
  });
  else {
    if (null == c) return null;
    t = (0, a.jsx)("img", {
      alt: u.default.Messages.CALL_HIGH_FIVE_EXCLAMATION,
      src: (0, r.getEffectUrl)({
        name: c,
        id: null,
        animated: !1
      }),
      className: s()(d.waiting, d.highFive)
    })
  }
  return (0, a.jsx)("div", {
    className: d.root,
    children: t
  })
}