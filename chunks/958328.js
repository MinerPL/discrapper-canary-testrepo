"use strict";
r.r(t), r.d(t, {
  default: function() {
    return j
  }
});
var a = r("735250");
r("470079");
var i = r("120356"),
  l = r.n(i),
  n = r("149765"),
  o = r("442837"),
  s = r("481060"),
  c = r("933557"),
  d = r("592125"),
  u = r("430824"),
  h = r("496675"),
  m = r("944486"),
  p = r("914010"),
  g = r("263704"),
  f = r("465670"),
  b = r("233608"),
  y = r("71080"),
  x = r("48077"),
  k = r("893048");

function v(e) {
  let {
    title: t,
    can: r
  } = e, i = r ? g.default : f.default, n = (0, a.jsx)("div", {
    className: l()(x.iconOuter, r ? x.iconCheck : x.iconCross),
    children: (0, a.jsx)(i, {
      className: x.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: x.scope,
    children: [n, (0, a.jsx)("div", {
      className: x.scopeInner,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function j() {
  let e = (0, o.useStateFromStores)([m.default], () => m.default.getChannelId()),
    t = (0, o.useStateFromStores)([p.default], () => p.default.getGuildId()),
    r = (0, o.useStateFromStores)([d.default], () => d.default.getChannel(e)),
    i = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(t)),
    g = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(r)),
    f = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(i)),
    j = (0, c.default)(r, !0),
    C = null != r ? (0, y.getChannelPermissionSpecMap)(r, !1, !0) : null,
    w = null != i ? b.default.getGuildPermissionSpecMap(i) : null,
    S = Object.values(null != C ? C : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, i = n.has(g, r);
      return (0, a.jsx)(v, {
        title: t,
        can: i
      }, t)
    }),
    T = Object.values(null != w ? w : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, i = n.has(f, r);
      return (0, a.jsx)(v, {
        title: t,
        can: i
      }, t)
    });
  return (0, a.jsx)("div", {
    className: l()(k.panel, x.panel),
    children: (0, a.jsxs)("div", {
      className: x.panelInner,
      children: [(0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: null != j ? "Permissions in ".concat(j) : "No channel selected"
        }), S]
      }), (0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: null != i ? "Permissions in ".concat(i.name) : "No guild selected"
        }), T]
      })]
    })
  })
}