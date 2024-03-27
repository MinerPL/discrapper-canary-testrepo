"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var i = l("37983");
l("884691");
var a = l("414456"),
  n = l.n(a),
  s = l("77078"),
  r = l("953109"),
  o = l("749170");

function c(e) {
  let {
    className: t,
    embeddedApps: l,
    muted: a
  } = e;
  if (l.length <= 0) return null;
  {
    if (1 === l.length) return (0, i.jsx)("div", {
      className: n(o.container, t, a && o.modeMuted),
      children: (0, i.jsx)(r.default, {
        game: l[0].application,
        className: o.icon20px
      })
    });
    let e = l.length - 1;
    return (0, i.jsxs)("div", {
      className: n(o.container, t, a && o.modeMuted),
      children: [(0, i.jsx)(r.default, {
        game: l[0].application,
        className: o.icon20px
      }), 2 === l.length ? (0, i.jsx)(r.default, {
        game: l[1].application,
        className: o.icon20px
      }) : (0, i.jsx)(s.Text, {
        className: o.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}