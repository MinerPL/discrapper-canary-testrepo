"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("399606"),
  o = n("481060"),
  u = n("893966"),
  d = n("472596"),
  c = n("285173"),
  f = n("430824"),
  h = n("496675"),
  m = n("151785"),
  p = n("776767"),
  E = n("981631"),
  C = n("689938"),
  g = n("196958");

function S(e) {
  let {
    member: t
  } = e, n = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t.guildId)), s = (0, r.useStateFromStores)([f.default], () => f.default.getRoles(t.guildId)), S = l.useMemo(() => null == n ? [] : null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
    var n, a, l, i;
    return null !== (i = null !== (l = null === (n = s[t]) || void 0 === n ? void 0 : n.position) && void 0 !== l ? l : 0 - (null === (a = s[e]) || void 0 === a ? void 0 : a.position)) && void 0 !== i ? i : 0
  }), [t.roles, t.highestRoleId, n, s]), _ = (0, r.useStateFromStores)([u.default], () => u.default.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), T = (0, d.useHighestRole)(_), I = (0, d.useContextMenuModerateRoles)(t), A = (0, r.useStateFromStores)([h.default], () => h.default.can(E.Permissions.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, a.jsx)(o.FormItem, {
    title: C.default.Messages.ROLES,
    titleClassName: g.infoTitle,
    children: (0, a.jsx)(p.UserModInfoItemContainer, {
      children: (0, a.jsx)(p.UserModInfoItem, {
        description: (0, a.jsxs)("div", {
          className: g.roleContainer,
          children: [(0, a.jsx)(o.Tooltip, {
            "aria-label": C.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
            tooltipContentClassName: g.__invalid_permissionTooltip,
            allowOverflow: !0,
            text: C.default.Messages.GUILD_MEMBER_MOD_VIEW_HIGHEST_ROLE,
            children: e => {
              let {
                onMouseEnter: n,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(o.Clickable, {
                onMouseEnter: n,
                onMouseLeave: l,
                children: (0, a.jsx)(c.default, {
                  className: i()(g.roleTooltipItem, g.highestRole),
                  role: T,
                  guildId: t.guildId
                })
              })
            }
          }), S.map(e => (0, a.jsx)(c.default, {
            className: i()(g.roleTooltipItem),
            role: s[e],
            guildId: t.guildId
          }, e)), A && (0, a.jsx)(o.Tooltip, {
            "aria-label": C.default.Messages.ADD_ROLE_A11Y_LABEL,
            tooltipContentClassName: g.__invalid_permissionTooltip,
            allowOverflow: !0,
            text: C.default.Messages.ADD_ROLE_A11Y_LABEL,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, a.jsx)(o.Clickable, {
                className: i()(g.addRoleContainer),
                onClick: I,
                onMouseEnter: t,
                onMouseLeave: n,
                children: (0, a.jsx)(m.default, {
                  className: i()(g.addRoleIcon),
                  width: 20,
                  height: 20
                })
              })
            }
          })]
        })
      })
    })
  })
}