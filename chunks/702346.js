"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("481060"),
  r = n("534761"),
  o = n("410003");

function u(e) {
  let {
    icon: t,
    iconNode: n,
    timestamp: a,
    className: i,
    children: u,
    contentClassName: d,
    iconClassName: c,
    iconContainerClassName: f,
    compact: E = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: l()(i, {
      [o.container]: !0,
      [o.compact]: E,
      [o.cozy]: !E
    }),
    children: [null != n && (0, s.jsx)("div", {
      className: l()(o.iconContainer, f),
      children: n
    }), null != t && (0, s.jsx)("div", {
      className: o.iconContainer,
      children: (0, s.jsx)("div", {
        "data-accessibility": "desaturate",
        className: l()(o.icon, o.iconSize, c),
        style: {
          backgroundImage: "url('".concat(t, "')")
        }
      })
    }), (0, s.jsxs)("div", {
      className: l()(d, o.content),
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
}, t.default = u