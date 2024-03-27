"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  u = n("748802"),
  o = n("233676"),
  d = n("77078"),
  c = n("412013"),
  f = n("978970"),
  h = n("305961"),
  m = n("465305"),
  p = n("136281"),
  E = n("914275"),
  g = n("789150"),
  S = n("49111"),
  C = n("782340"),
  _ = n("206845");

function I(e) {
  var t, n;
  let {
    permission: l,
    roleIds: s,
    guild: u,
    specMap: m
  } = e, p = S.Permissions[l], g = null !== (n = null === (t = m[p.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, f.getPermissionName)(p), I = E.ELEVATED_PERMISSIONS.has(p), T = (0, r.useStateFromStores)([h.default], () => h.default.getRoles(u.id));
  return (0, a.jsx)(d.Tooltip, {
    "aria-label": C.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
    tooltipClassName: _.roleTooltipContainer,
    tooltipContentClassName: _.roleTooltipContentContainer,
    allowOverflow: !0,
    text: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: I ? C.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_GRANTED_BY : C.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY
      }), s.map(e => (0, a.jsx)("div", {
        className: i(_.roleTooltipItem),
        children: (0, a.jsx)(c.default, {
          role: T[e],
          guildId: u.id
        })
      }, e))]
    }),
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, a.jsxs)(d.Clickable, {
        className: i(_.permissionChiplet, {
          [_.elevatedPermission]: I
        }),
        onMouseEnter: t,
        onMouseLeave: n,
        children: [I && (0, a.jsx)(o.ShieldLockIcon, {
          width: 16,
          height: 16,
          color: d.tokens.colors.TEXT_BRAND
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: g
        })]
      })
    }
  })
}
var T = l.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, s = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(t.guildId), [t.guildId]), o = (0, E.useUserPermissionsAndRoles)(t.userId, t.guildId, E.MOD_PERMISSIONS), c = (0, E.useUserPermissionsAndRoles)(t.userId, t.guildId, E.ALL_PERMISSIONS), f = Object.keys(o).length, T = Object.keys(c).length, v = l.useMemo(() => null != s ? m.default.getGuildPermissionSpecMap(s) : null, [s]), x = l.useMemo(() => null != s ? m.default.generateGuildPermissionSpec(s) : null, [s]), N = l.useMemo(() => {
    if (null == s || null == v) return null;
    if (0 === f) return (0, a.jsx)("div", {
      className: i(_.permissionChiplet, _.noModPerms),
      children: (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: C.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == x || x.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          l = E.ALL_PERMISSIONS.find(e => S.Permissions[e] === n);
        if (null == l) return;
        let i = o[l];
        null != i && e.push((0, a.jsx)(I, {
          permission: l,
          roleIds: i,
          guild: s,
          specMap: v
        }, l))
      })
    }), e
  }, [s, f, o, x, v]);
  return null == s ? null : (0, a.jsx)(d.FormItem, {
    title: (0, a.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, a.jsx)(d.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: C.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_TITLE
      }), (0, a.jsxs)(d.Clickable, {
        className: _.viewAllPermissions,
        onClick: () => n(g.ModViewPanel.PERMISSIONS),
        children: [(0, a.jsx)(d.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: C.default.Messages.GUILD_MEMBER_MOD_VIEW_VIEW_ALL_PERMISSIONS.format({
            count: T
          })
        }), (0, a.jsx)(u.ChevronSmallRightIcon, {
          width: 16,
          height: 16
        })]
      })]
    }),
    titleClassName: _.infoTitle,
    children: (0, a.jsx)(p.UserModInfoItemContainer, {
      children: (0, a.jsx)(p.UserModInfoItem, {
        description: (0, a.jsx)("div", {
          className: _.permissionsContainer,
          children: N
        })
      })
    })
  })
})