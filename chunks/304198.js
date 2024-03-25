"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("77078"),
  r = n("587904"),
  o = n("957617");

function u(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: a,
    className: i,
    children: u,
    contentClassName: d,
    iconClassName: c,
    iconContainerClassName: E,
    compact: f = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: l(i, {
      [o.container]: !0,
      [o.compact]: f,
      [o.cozy]: !f
    }),
    children: [null != n && (0, s.jsx)("div", {
      className: l(o.iconContainer, E),
      children: n
    }), null != t && (0, s.jsx)("div", {
      className: o.iconContainer,
      children: (0, s.jsx)("div", {
        "data-accessibility": "desaturate",
        className: l(o.icon, o.iconSize, c),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, s.jsxs)("div", {
      className: l(d, o.content),
      children: [u, null != a && (0, s.jsx)(r.default, {
        timestamp: a
      })]
    })]
  })
}
u.Action = e => {
  let {
    onClick: t,
    children: n
  } = e;
  return (0, s.jsxs)("span", {
    className: o.action,
    children: ["—", (0, s.jsx)(i.Anchor, {
      onClick: t,
      className: o.actionAnchor,
      children: n
    })]
  })
};
var d = u