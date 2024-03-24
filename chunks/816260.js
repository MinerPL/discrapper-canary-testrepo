"use strict";
n.r(t), n.d(t, {
  Card: function() {
    return h
  },
  CardInfoSection: function() {
    return m
  },
  CardUser: function() {
    return p
  },
  CardTitle: function() {
    return E
  },
  CardSubtitle: function() {
    return g
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("446674"),
  r = n("77078"),
  u = n("26989"),
  o = n("305961"),
  d = n("697218"),
  c = n("387111"),
  f = n("753482");

function h(e) {
  let {
    children: t,
    selected: n
  } = e;
  return (0, a.jsx)("div", {
    className: s(f.container, {
      [f.selected]: n
    }),
    children: t
  })
}

function m(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)("div", {
    className: f.infoSection,
    children: t
  })
}

function p(e) {
  let {
    userId: t,
    guildId: n,
    channelId: l
  } = e, s = (0, i.useStateFromStores)([d.default], () => d.default.getUser(t)), h = (0, i.useStateFromStores)([u.default], () => u.default.getMember(n, t)), m = (0, i.useStateFromStores)([o.default], () => {
    var e;
    return (null == h ? void 0 : h.colorRoleId) != null ? null === (e = o.default.getRole(n, h.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
  }, [n, h]);
  if (null == s) return null;
  let p = null == h ? void 0 : h.colorString,
    E = c.default.getName(n, l, s);
  return (0, a.jsxs)("div", {
    className: f.userSection,
    children: [(0, a.jsx)(r.Avatar, {
      src: s.getAvatarURL(n, 80),
      size: r.AvatarSizes.SIZE_16,
      "aria-label": "avatar"
    }), (0, a.jsx)(r.NameWithRole, {
      color: null != p ? p : void 0,
      roleName: m,
      name: E,
      className: f.userName
    })]
  })
}

function E(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(r.Heading, {
    variant: "heading-sm/normal",
    className: f.contentDescription,
    lineClamp: 1,
    children: t
  })
}

function g(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(r.Text, {
    variant: "text-sm/normal",
    className: f.contentDescription,
    lineClamp: 1,
    children: t
  })
}