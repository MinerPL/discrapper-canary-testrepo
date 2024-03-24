"use strict";
t.r(r), t.d(r, {
  default: function() {
    return C
  }
});
var a = t("37983");
t("884691");
var n = t("414456"),
  i = t.n(n),
  o = t("316693"),
  l = t("446674"),
  s = t("77078"),
  c = t("679653"),
  d = t("42203"),
  u = t("305961"),
  h = t("957255"),
  p = t("18494"),
  m = t("162771"),
  g = t("36694"),
  f = t("945330"),
  y = t("465305"),
  b = t("606762"),
  x = t("854231"),
  k = t("699412");

function v(e) {
  let {
    title: r,
    can: t
  } = e, n = t ? g.default : f.default, o = (0, a.jsx)("div", {
    className: i(x.iconOuter, t ? x.iconCheck : x.iconCross),
    children: (0, a.jsx)(n, {
      className: x.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: x.scope,
    children: [o, (0, a.jsx)("div", {
      className: x.scopeInner,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: r
      })
    })]
  })
}

function C() {
  let e = (0, l.useStateFromStores)([p.default], () => p.default.getChannelId()),
    r = (0, l.useStateFromStores)([m.default], () => m.default.getGuildId()),
    t = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(e)),
    n = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(r)),
    g = (0, l.useStateFromStores)([h.default], () => h.default.computePermissions(t)),
    f = (0, l.useStateFromStores)([h.default], () => h.default.computePermissions(n)),
    C = (0, c.default)(t, !0),
    S = null != t ? (0, b.getChannelPermissionSpecMap)(t, !1, !0) : null,
    j = null != n ? y.default.getGuildPermissionSpecMap(n) : null,
    T = Object.values(null != S ? S : {}).map(e => {
      let {
        title: r,
        flag: t
      } = e, n = o.has(g, t);
      return (0, a.jsx)(v, {
        title: r,
        can: n
      }, r)
    }),
    w = Object.values(null != j ? j : {}).map(e => {
      let {
        title: r,
        flag: t
      } = e, n = o.has(f, t);
      return (0, a.jsx)(v, {
        title: r,
        can: n
      }, r)
    });
  return (0, a.jsx)("div", {
    className: i(k.panel, x.panel),
    children: (0, a.jsxs)("div", {
      className: x.panelInner,
      children: [(0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: null != C ? "Permissions in ".concat(C) : "No channel selected"
        }), T]
      }), (0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: null != n ? "Permissions in ".concat(n.name) : "No guild selected"
        }), w]
      })]
    })
  })
}