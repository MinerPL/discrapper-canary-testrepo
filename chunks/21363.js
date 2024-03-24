"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  u = n("77078"),
  o = n("178406"),
  d = n("553275"),
  c = n("412013"),
  f = n("305961"),
  h = n("957255"),
  m = n("351825"),
  p = n("136281"),
  E = n("49111"),
  g = n("782340"),
  S = n("865331");

function C(e) {
  let {
    member: t
  } = e, n = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t.guildId)), s = (0, r.useStateFromStores)([f.default], () => f.default.getRoles(t.guildId)), C = l.useMemo(() => null == n ? [] : null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
    var n, a, l, i;
    return null !== (i = null !== (l = null === (n = s[t]) || void 0 === n ? void 0 : n.position) && void 0 !== l ? l : 0 - (null === (a = s[e]) || void 0 === a ? void 0 : a.position)) && void 0 !== i ? i : 0
  }), [t.roles, t.highestRoleId, n, s]), _ = (0, r.useStateFromStores)([o.default], () => o.default.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), I = (0, d.useHighestRole)(_), T = (0, d.useContextMenuModerateRoles)(t), v = (0, r.useStateFromStores)([h.default], () => h.default.can(E.Permissions.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, a.jsx)(u.FormItem, {
    title: g.default.Messages.ROLES,
    titleClassName: S.infoTitle,
    children: (0, a.jsx)(p.UserModInfoItemContainer, {
      children: (0, a.jsx)(p.UserModInfoItem, {
        description: (0, a.jsxs)("div", {
          className: S.roleContainer,
          children: [(0, a.jsx)(u.Tooltip, {
            "aria-label": g.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
            tooltipContentClassName: S.permissionTooltip,
            allowOverflow: !0,
            text: g.default.Messages.GUILD_MEMBER_MOD_VIEW_HIGHEST_ROLE,
            children: e => {
              let {
                onMouseEnter: n,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(u.Clickable, {
                onMouseEnter: n,
                onMouseLeave: l,
                children: (0, a.jsx)(c.default, {
                  className: i(S.roleTooltipItem, S.highestRole),
                  role: I,
                  guildId: t.guildId
                })
              })
            }
          }), C.map(e => (0, a.jsx)(c.default, {
            className: i(S.roleTooltipItem),
            role: s[e],
            guildId: t.guildId
          }, e)), v && (0, a.jsx)(u.Tooltip, {
            "aria-label": g.default.Messages.ADD_ROLE_A11Y_LABEL,
            tooltipContentClassName: S.permissionTooltip,
            allowOverflow: !0,
            text: g.default.Messages.ADD_ROLE_A11Y_LABEL,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, a.jsx)(u.Clickable, {
                className: i(S.addRoleContainer),
                onClick: T,
                onMouseEnter: t,
                onMouseLeave: n,
                children: (0, a.jsx)(m.default, {
                  className: i(S.addRoleIcon),
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