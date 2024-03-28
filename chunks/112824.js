"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  },
  getRiskyPerms: function() {
    return m
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  n = s.n(l),
  i = s("149765"),
  r = s("442837"),
  o = s("481060"),
  d = s("430824"),
  u = s("496675"),
  c = s("441674"),
  E = s("759231"),
  _ = s("700785"),
  I = s("647086"),
  T = s("135899"),
  S = s("689938"),
  f = s("893079");

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
      className: n()(f.simpleItemWrapper, f.disabled),
      ...e,
      children: g
    })
  }) : (0, a.jsx)(o.Clickable, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("39627")]).then(s.bind(s, "193845"));
        return s => (0, a.jsx)(e, {
          guild: t,
          ...s
        })
      })
    },
    className: n()(f.simpleItemWrapper, f.clickable),
    children: g
  }) : (0, a.jsx)("div", {
    className: f.simpleItemWrapper,
    children: g
  })
}