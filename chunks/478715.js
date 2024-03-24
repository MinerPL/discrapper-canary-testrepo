"use strict";
n.r(t), n.d(t, {
  SubscriptionTag: function() {
    return d
  },
  Tag: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var i = n("980763"),
  l = n("224701"),
  r = n("502026"),
  a = n("792788"),
  o = n("939021");
let c = {
  width: 12,
  height: 12
};

function d(e) {
  let {
    type: t
  } = e;
  return (0, s.jsx)(u, {
    icon: "user" === t ? (0, s.jsx)(l.UserIcon, {
      ...c,
      color: "var(--text-positive)"
    }) : (0, s.jsx)(i.ServerIcon, {
      ...c,
      color: "var(--text-brand)"
    }),
    text: "user" === t ? a.default.Messages.Storefront.USER_SUBSCRIPTION : a.default.Messages.Storefront.SERVER_SUBSCRIPTION
  })
}

function u(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, s.jsxs)("div", {
    className: o.container,
    children: [t, (0, s.jsx)(r.Text, {
      color: "interactive-normal",
      variant: "text-sm/medium",
      children: n
    })]
  })
}