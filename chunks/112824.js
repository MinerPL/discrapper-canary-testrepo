"use strict";
t.d(s, {
  R: function() {
    return S
  },
  Z: function() {
    return h
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(149765),
  r = t(442837),
  o = t(481060),
  c = t(430824),
  d = t(496675),
  u = t(441674),
  E = t(759231),
  _ = t(700785),
  I = t(647086),
  T = t(135899),
  N = t(689938),
  m = t(212723);

function S(e) {
  return T.$X.filter(s => (null == e ? void 0 : e.id) !== I._ && _.oz(s, e))
}

function h(e) {
  let {
    guild: s
  } = e, i = (0, r.e7)([c.Z], () => c.Z.getRole(s.id, s.getEveryoneRoleId())), _ = S(s), I = _.length > 0, h = T.$X.some(e => !d.Z.can(e, s, null, {
    [i.id]: {
      ...i,
      permissions: a.Od(i.permissions, e)
    }
  })), g = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: m.itemContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: N.Z.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: N.Z.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS_DETAILS.format({
          numPerms: _.length
        })
      })]
    }), I ? (0, n.jsx)(E.Z, {
      height: 24,
      width: 24,
      className: m.warning,
      "aria-label": N.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL
    }) : (0, n.jsx)(u.Z, {
      height: 24,
      width: 24,
      className: m.check,
      "aria-label": N.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL_COMPLETE
    })]
  });
  return I ? h ? (0, n.jsx)(o.Tooltip, {
    text: N.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_WARNING,
    children: e => (0, n.jsx)("div", {
      className: l()(m.simpleItemWrapper, m.disabled),
      ...e,
      children: g
    })
  }) : (0, n.jsx)(o.Clickable, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("39627")]).then(t.bind(t, 193845));
        return t => (0, n.jsx)(e, {
          guild: s,
          ...t
        })
      })
    },
    className: l()(m.simpleItemWrapper, m.clickable),
    children: g
  }) : (0, n.jsx)("div", {
    className: m.simpleItemWrapper,
    children: g
  })
}