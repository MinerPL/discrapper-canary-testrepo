"use strict";
s.r(t), s.d(t, {
  getRiskyPerms: function() {
    return m
  },
  default: function() {
    return N
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("316693"),
  r = s("446674"),
  o = s("77078"),
  d = s("305961"),
  u = s("957255"),
  c = s("578706"),
  E = s("423487"),
  _ = s("991170"),
  I = s("695838"),
  T = s("69741"),
  S = s("782340"),
  f = s("854743");

function m(e) {
  return T.MODERATOR_PERMISSIONS.filter(t => (null == e ? void 0 : e.id) !== I.FAVORITES_RAW_GUILD_ID && _.canEveryone(t, e))
}

function N(e) {
  let {
    guild: t
  } = e, l = (0, r.useStateFromStores)([d.default], () => d.default.getRole(t.id, t.getEveryoneRoleId())), _ = m(t), I = _.length > 0, N = T.MODERATOR_PERMISSIONS.some(e => !u.default.can(e, t, null, {
    [l.id]: {
      ...l,
      permissions: i.remove(l.permissions, e)
    }
  })), g = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: f.itemContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: S.default.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: S.default.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS_DETAILS.format({
          numPerms: _.length
        })
      })]
    }), I ? (0, a.jsx)(E.default, {
      height: 24,
      width: 24,
      className: f.warning,
      "aria-label": S.default.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL
    }) : (0, a.jsx)(c.default, {
      height: 24,
      width: 24,
      className: f.check,
      "aria-label": S.default.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL_COMPLETE
    })]
  });
  return I ? N ? (0, a.jsx)(o.Tooltip, {
    text: S.default.Messages.SAFETY_REMOVE_RISKY_PERMS_WARNING,
    children: e => (0, a.jsx)("div", {
      className: n(f.simpleItemWrapper, f.disabled),
      ...e,
      children: g
    })
  }) : (0, a.jsx)(o.Clickable, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("343600").then(s.bind(s, "343600"));
        return s => (0, a.jsx)(e, {
          guild: t,
          ...s
        })
      })
    },
    className: n(f.simpleItemWrapper, f.clickable),
    children: g
  }) : (0, a.jsx)("div", {
    className: f.simpleItemWrapper,
    children: g
  })
}