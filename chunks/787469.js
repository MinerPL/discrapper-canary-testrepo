n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(399606),
  o = n(481060),
  c = n(893966),
  u = n(472596),
  d = n(285173),
  h = n(430824),
  p = n(496675),
  m = n(776767),
  _ = n(981631),
  f = n(689938),
  E = n(749348);

function g(e) {
  let {
member: t
  } = e, n = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guildId)), s = (0, r.e7)([h.Z], () => h.Z.getRoles(t.guildId)), g = a.useMemo(() => null == n ? [] : null == t.highestRoleId ? t.roles : Object.values(s).filter(e => e.id !== t.highestRoleId && t.roles.includes(e.id)).sort((e, t) => {
var n, i;
return null !== (i = null !== (n = null == e ? void 0 : e.position) && void 0 !== n ? n : 0 - (null == t ? void 0 : t.position)) && void 0 !== i ? i : 0;
  }).map(e => e.id), [
t.roles,
t.highestRoleId,
n,
s
  ]), C = (0, r.e7)([c.Z], () => c.Z.getEnhancedMember(t.guildId, t.userId), [
t.guildId,
t.userId
  ]), I = (0, u.zq)(C), x = (0, u.qr)(t), T = (0, r.e7)([p.Z], () => p.Z.can(_.Plq.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, i.jsx)(o.FormItem, {
title: f.Z.Messages.ROLES,
titleClassName: E.infoTitle,
children: (0, i.jsx)(m.WM, {
  children: (0, i.jsx)(m._2, {
    description: t.roles.length > 0 || T ? (0, i.jsxs)('div', {
      className: E.roleContainer,
      children: [
        (0, i.jsx)(o.Tooltip, {
          'aria-label': f.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
          allowOverflow: !0,
          text: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_HIGHEST_ROLE,
          children: e => {
            let {
              onMouseEnter: n,
              onMouseLeave: a
            } = e;
            return (0, i.jsx)(o.Clickable, {
              onMouseEnter: n,
              onMouseLeave: a,
              children: (0, i.jsx)(d.Z, {
                className: l()(E.roleTooltipItem, E.highestRole),
                role: I,
                guildId: t.guildId
              })
            });
          }
        }),
        g.map(e => (0, i.jsx)(d.Z, {
          className: E.roleTooltipItem,
          role: s[e],
          guildId: t.guildId
        }, e)),
        T && (0, i.jsx)(o.Tooltip, {
          'aria-label': f.Z.Messages.ADD_ROLE_A11Y_LABEL,
          allowOverflow: !0,
          text: f.Z.Messages.ADD_ROLE_A11Y_LABEL,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, i.jsx)(o.Clickable, {
              className: E.addRoleContainer,
              onClick: x,
              onMouseEnter: t,
              onMouseLeave: n,
              children: (0, i.jsx)(o.CirclePlusIcon, {
                size: 'custom',
                color: 'currentColor',
                className: E.addRoleIcon,
                width: 20,
                height: 20
              })
            });
          }
        })
      ]
    }) : (0, i.jsx)('div', {
      className: E.noRoles,
      children: (0, i.jsx)(o.Text, {
        variant: 'text-sm/normal',
        children: f.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES
      })
    })
  })
})
  });
}