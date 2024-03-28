"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("481060"),
  r = n("366695"),
  o = n("956880");

function u(e) {
  let {
    className: t,
    embeddedApps: n,
    muted: a
  } = e;
  if (n.length <= 0) return null;
  {
    if (1 === n.length) return (0, l.jsx)("div", {
      className: s()(o.container, t, a && o.modeMuted),
      children: (0, l.jsx)(r.default, {
        game: n[0].application,
        className: o.icon20px
      })
    });
    let e = n.length - 1;
    return (0, l.jsxs)("div", {
      className: s()(o.container, t, a && o.modeMuted),
      children: [(0, l.jsx)(r.default, {
        game: n[0].application,
        className: o.icon20px
      }), 2 === n.length ? (0, l.jsx)(r.default, {
        game: n[1].application,
        className: o.icon20px
      }) : (0, l.jsx)(i.Text, {
        className: o.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}